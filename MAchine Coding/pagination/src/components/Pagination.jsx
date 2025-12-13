import { useEffect, useMemo, useState } from 'react';
import '../styles/Pagination.css';

/**
 * Reusable Pagination Component
 * @param {Object} props
 * @param {number} props.totalItems - Total number of items
 * @param {number} props.itemsPerPage - Initial items per page (default: 10)
 * @param {number} props.currentPage - Current page number (default: 1)
 * @param {function} props.onPageChange - Callback when page changes
 * @param {function} props.onPageSizeChange - Callback when page size changes
 * @param {boolean} props.showPageSizeSelector - Show page size dropdown (default: true)
 * @param {array} props.pageSizeOptions - Page size options (default: [5, 10, 20, 50])
 * @param {number} props.maxPageNumbers - Max page numbers to show (default: 5)
 */
const Pagination = ({
  totalItems = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange = () => {},
  onPageSizeChange = () => {},
  showPageSizeSelector = true,
  pageSizeOptions = [5, 10, 20, 50],
  maxPageNumbers = 5,
}) => {
  // Local state so the dropdown stays controlled; keeps in sync with parent changes.
  const [pageSize, setPageSize] = useState(itemsPerPage);

  useEffect(() => {
    setPageSize(itemsPerPage);
  }, [itemsPerPage]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / pageSize)),
    [totalItems, pageSize]
  );

  const validCurrentPage = useMemo(() => {
    const clamped = Math.min(Math.max(1, currentPage), totalPages);
    return Number.isFinite(clamped) ? clamped : 1;
  }, [currentPage, totalPages]);

  // Calculate page numbers to display
  const pageNumbers = useMemo(() => {
    if (totalPages <= maxPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    const leftSide = Math.floor(maxPageNumbers / 2);
    const rightSide = maxPageNumbers - leftSide - 1;

    let startPage = validCurrentPage - leftSide;
    let endPage = validCurrentPage + rightSide;

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage = Math.max(1, totalPages - maxPageNumbers + 1);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis
    if (startPage > 1) {
      pages.unshift('...');
      pages.unshift(1);
    }

    if (endPage < totalPages) {
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  }, [validCurrentPage, totalPages, maxPageNumbers]);

  const handlePrevious = () => {
    if (validCurrentPage > 1) {
      onPageChange(validCurrentPage - 1);
    }
  };

  const handleNext = () => {
    if (validCurrentPage < totalPages) {
      onPageChange(validCurrentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (typeof page === 'number' && page !== validCurrentPage) {
      onPageChange(page);
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!Number.isFinite(newSize) || newSize === pageSize) return;

    setPageSize(newSize);
    onPageSizeChange(newSize);
    // Reset to page 1 when page size changes so the user sees data.
    onPageChange(1);
  };

  if (totalItems <= 0) {
    return null;
  }

  const startItem = (validCurrentPage - 1) * pageSize + 1;
  const endItem = Math.min(validCurrentPage * pageSize, totalItems);

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span className="item-count">
          Showing {startItem} to {endItem} of {totalItems} items
        </span>
      </div>

      <div className="pagination-controls">
        {/* Previous Button */}
        <button
          className="pagination-btn pagination-btn-prev"
          onClick={handlePrevious}
          disabled={validCurrentPage === 1}
          title="Previous page"
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className="pagination-numbers">
          {pageNumbers.map((page, index) => (
            <button
              key={index}
              className={`pagination-number ${
                page === validCurrentPage ? 'active' : ''
              } ${page === '...' ? 'ellipsis' : ''}`}
              onClick={() => handlePageClick(page)}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="pagination-btn pagination-btn-next"
          onClick={handleNext}
          disabled={validCurrentPage === totalPages}
          title="Next page"
        >
          Next →
        </button>
      </div>

      {/* Page Size Selector */}
      {showPageSizeSelector && (
        <div className="pagination-size-selector">
          <label htmlFor="page-size">Items per page:</label>
          <select
            id="page-size"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="page-size-dropdown"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Page Info */}
      <div className="pagination-page-info">
        Page {validCurrentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
