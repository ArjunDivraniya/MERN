// here all login of the drag and drop will be written after the drag and submit button click so file conenct is sho using the fs module 
import React, { useCallback, useState } from 'react';

// Simple, machine-coding friendly drag & drop + file chooser
const Drag = () => {
    const [fileName, setFileName] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [fileType, setFileType] = useState('');
    const [fileSize, setFileSize] = useState(0);
    const [fileUrl, setFileUrl] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [submitted, setSubmitted] = useState(false);
  
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const readFile = useCallback((file) => {
        if (!file) return;
        
        setFileName(file.name);
        setFileType(file.type);
        setFileSize(file.size);
        setSubmitted(false);
        
        // Create URL for binary files (PDF, images, etc.)
        const url = URL.createObjectURL(file);
        setFileUrl(url);
        
        // Check file type and read accordingly
        if (file.type.startsWith('text/') || 
            file.name.endsWith('.txt') || 
            file.name.endsWith('.md') || 
            file.name.endsWith('.json') || 
            file.name.endsWith('.csv')) {
            // Read as text
            const reader = new FileReader();
            reader.onload = (evt) => {
                setFileContent(String(evt.target.result || ''));
            };
            reader.onerror = () => {
                setFileContent('Error reading file.');
            };
            reader.readAsText(file);
        } else {
            // For binary files, just store basic info
            setFileContent('');
        }
    }, []);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer?.files?.[0];
        readFile(file);
    };



    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        readFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show content if we have a file (text content or file URL)
        if (fileContent || fileUrl) {
            setSubmitted(true);
        }
    };

    return (
        <div className="dd-container">
            <h1 className="dd-title">Drag and Drop Component</h1>

            <form className="dd-form" onSubmit={handleSubmit}>
                <div
                    className={`dd-dropzone ${isDragging ? 'dragging' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <p>Drag & drop a text file here</p>
                    <p>or</p>
                    <label htmlFor="dd-file-input" className="dd-btn">Choose File</label>
                    <input
                        id="dd-file-input"
                        type="file"
                        onChange={handleFileChange}
                        className="dd-file-input"
                    />
                </div>

                <div className="dd-actions">
                    <button type="submit" className="dd-btn primary">Submit</button>
                    {fileName && <span className="dd-file-name">Selected: {fileName}</span>}
                </div>
            </form>

            <div className="dd-output">
                <h2>File Content</h2>
                {submitted ? (
                    <div className="dd-content">
                        <div className="dd-file-info">
                            <p><strong>Name:</strong> {fileName}</p>
                            <p><strong>Type:</strong> {fileType || 'Unknown'}</p>
                            <p><strong>Size:</strong> {(fileSize / 1024).toFixed(2)} KB</p>
                        </div>
                        
                        {fileContent ? (
                            // Text files
                            <pre className="dd-pre">{fileContent}</pre>
                        ) : fileType.startsWith('image/') ? (
                            // Images
                            <img src={fileUrl} alt={fileName} className="dd-image" />
                        ) : fileType === 'application/pdf' ? (
                            // PDF files
                            <iframe src={fileUrl} className="dd-pdf" title="PDF Viewer" />
                        ) : (
                            // Other files
                            <div className="dd-binary-info">
                                <p>📄 Binary file cannot be displayed as text</p>
                                <a href={fileUrl} download={fileName} className="dd-download">
                                    Download File
                                </a>
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="dd-placeholder">No content yet. Select a file and submit.</p>
                )}
            </div>
        </div>
    );
};

export default Drag;