import { useState } from 'react';
import Pagination from './components/Pagination';
import './App.css';

// Sample data generator
const generateSampleData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is a sample item number ${i + 1}`,
  }));
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [items, setItems] = useState(() => generateSampleData(50));
  const [nextId, setNextId] = useState(51);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = items.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
  };

  // Add new item
  const handleAddItem = () => {
    const newItem = {
      id: nextId,
      title: `Item ${nextId}`,
      description: `This is a sample item number ${nextId}`,
    };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
  };

  // Delete item
  const handleDeleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
    // Reset to first page if current page is out of bounds
    const maxPage = Math.ceil(filteredItems.length / pageSize);
    if (currentPage > maxPage) {
      setCurrentPage(Math.max(1, maxPage));
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📄 Reusable Pagination Component</h1>
        <p>A flexible, feature-rich pagination component for your React apps</p>
      </header>

      <main className="app-main">
        {/* Control Buttons */}
        <section className="control-section">
          <button className="btn btn-add" onClick={handleAddItem}>
            ➕ Add Item
          </button>
          <span className="item-count">Total Items: {items.length}</span>
        </section>

        {/* Data Display */}
        <section className="data-section">
          <h2>Sample Data List</h2>
          <div className="items-grid">
            {paginatedData.map((item) => (
              <div key={item.id} className="item-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button 
                  className="btn btn-delete" 
                  onClick={() => handleDeleteItem(item.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination Component */}
        <Pagination
          totalItems={items.length}
          itemsPerPage={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          showPageSizeSelector={true}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          maxPageNumbers={7}
        />

     </main>

      <footer className="app-footer">
        <p>Built with React & Vite | Reusable Pagination Component</p>
      </footer>
    </div>
  );
}

export default App;
