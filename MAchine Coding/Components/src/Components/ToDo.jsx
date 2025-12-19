import React, { useEffect, useState } from 'react';
import './ToDo.css';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeView, setActiveView] = useState('home'); // 'home' or 'search'
    
    
    const [addPopup, setAddPopup] = useState(false);
    const [updatePopup, setUpdatePopup] = useState({ isOpen: false, task: null });
    const [deletePopup, setDeletePopup] = useState({ isOpen: false, taskId: null, taskTitle: '' });

   
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        fetch('http://localhost:3000/get-todos')
            .then((res) => res.json())
            .then((data) => {
                setTasks(data);
                setFilteredTasks(data);
            })
            .catch((err) => console.log(err));
    };

    
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks.filter((task) =>
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.descrtiption.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTasks(filtered);
        }
    }, [searchTerm, tasks]);

    // Add Task Handler
    const addTaskHandler = (newTask) => {
        fetch('http://localhost:3000/add-todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAddPopup(false);
                fetchTasks(); // Refresh tasks
            })
            .catch((err) => console.log(err));
    };

    // Delete Task Handler
    const onDeleteConfirm = () => {
        fetch(`http://localhost:3000/delete-todo/${deletePopup.taskId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDeletePopup({ isOpen: false, taskId: null, taskTitle: '' });
                fetchTasks(); // Refresh tasks
            })
            .catch((err) => console.log(err));
    };

    // Update Task Handler
    const onUpdateConfirm = (updatedTask) => {
        fetch(`http://localhost:3000/update-todo/${updatedTask.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUpdatePopup({ isOpen: false, task: null });
                fetchTasks(); // Refresh tasks
            })
            .catch((err) => console.log(err));
    };

    // Cancel/Close all popups
    const closeAllPopups = () => {
        setAddPopup(false);
        setUpdatePopup({ isOpen: false, task: null });
        setDeletePopup({ isOpen: false, taskId: null, taskTitle: '' });
    };

    const displayedTasks = activeView === 'home' ? tasks : filteredTasks;

    return (
        <div className="todo-container">
            {/* Navbar */}
            <nav className="navbar">
                <button 
                    className={activeView === 'home' ? 'nav-btn active' : 'nav-btn'}
                    onClick={() => {
                        setActiveView('home');
                        setSearchTerm('');
                    }}
                >
                    Home
                </button>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Task"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setActiveView('search');
                        }}
                        className="search-input"
                    />
                </div>
                <button className="nav-btn add-btn" onClick={() => setAddPopup(true)}>
                    Add Task
                </button>
            </nav>

            {/* Main Content - Only show when no popup is open */}
            {!addPopup && !updatePopup.isOpen && !deletePopup.isOpen && (
                <div className="tasks-container">
                    {displayedTasks.length === 0 ? (
                        <p className="no-tasks">No tasks found</p>
                    ) : (
                        displayedTasks.map((task) => (
                            <div key={task.id} className="task-card">
                                <div className="task-header">
                                    <h3>{task.title}</h3>
                                    <span className={`task-state ${task.state.replace(' ', '-').toLowerCase()}`}>
                                        {task.state}
                                    </span> 

                                    <select
                                        value={task.state}
                                        onChange={(e) => {  
                                            const updatedTask = { ...task, state: e.target.value };
                                            onUpdateConfirm(updatedTask);
                                        }}
                                    >
                                        <option value="Not Started">Not Started</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <p className="task-description">{task.descrtiption}</p>
                                <div className="task-actions">
                                    <button
                                        className="btn-update"
                                        onClick={() => setUpdatePopup({ isOpen: true, task })}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => setDeletePopup({ 
                                            isOpen: true, 
                                            taskId: task.id, 
                                            taskTitle: task.title 
                                        })}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Add Task Popup */}
            {addPopup && (
                <Modal onClose={closeAllPopups}>
                    <AddPopup onAdd={addTaskHandler} onCancel={closeAllPopups} />
                </Modal>
            )}

            {/* Update Task Popup */}
            {updatePopup.isOpen && (
                <Modal onClose={closeAllPopups}>
                    <UpdatePopup
                        task={updatePopup.task}
                        onUpdate={onUpdateConfirm}
                        onCancel={closeAllPopups}
                    />
                </Modal>
            )}

            {/* Delete Confirmation Popup */}
            {deletePopup.isOpen && (
                <Modal onClose={closeAllPopups}>
                    <DeletePopup
                        message={`Are you sure you want to delete "${deletePopup.taskTitle}"?`}
                        onConfirm={onDeleteConfirm}
                        onCancel={closeAllPopups}
                    />
                </Modal>
            )}
        </div>
    );
};

export default ToDo;

// Modal Component with Overlay
const Modal = ({ children, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

// Delete Confirmation Popup
const DeletePopup = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="popup delete-popup">
            <h3>⚠️ Confirm Delete</h3>
            <p>{message}</p>
            <div className="popup-actions">
                <button className="btn-confirm" onClick={onConfirm}>
                    Confirm
                </button>
                <button className="btn-cancel" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

// Update Task Popup
const UpdatePopup = ({ task, onUpdate, onCancel }) => {
    const [updatedTask, setUpdatedTask] = useState(task);

    return (
        <div className="popup update-popup">
            <h3>✏️ Update Task</h3>
            <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    value={updatedTask.title}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                    placeholder="Task Title"
                />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea
                    value={updatedTask.descrtiption}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, descrtiption: e.target.value })}
                    placeholder="Task Description"
                    rows="4"
                />
            </div>
            <div className="form-group">
                <label>Status:</label>
                <select
                    value={updatedTask.state}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, state: e.target.value })}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="popup-actions">
                <button className="btn-confirm" onClick={() => onUpdate(updatedTask)}>
                    Update Task
                </button>
                <button className="btn-cancel" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

// Add Task Popup
const AddPopup = ({ onAdd, onCancel }) => {
    const [newTask, setNewTask] = useState({ 
        title: '', 
        descrtiption: '', 
        state: 'Not Started' 
    });

    const handleAdd = () => {
        if (!newTask.title.trim() || !newTask.descrtiption.trim()) {
            alert('Please fill in all fields');
            return;
        }
        onAdd(newTask);
    };

    return (
        <div className="popup add-popup">
            <h3>➕ Add New Task</h3>
            <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    placeholder="Enter task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea
                    placeholder="Enter task description"
                    value={newTask.descrtiption}
                    onChange={(e) => setNewTask({ ...newTask, descrtiption: e.target.value })}
                    rows="4"
                />
            </div>
            <div className="form-group">
                <label>Status:</label>
                <select
                    value={newTask.state}
                    onChange={(e) => setNewTask({ ...newTask, state: e.target.value })}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="popup-actions">
                <button className="btn-confirm" onClick={handleAdd}>
                    Add Task
                </button>
                <button className="btn-cancel" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};