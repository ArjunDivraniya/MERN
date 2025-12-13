# Reusable Pagination Component

A flexible, feature-rich pagination component built with React that can be easily integrated across multiple applications.

## 📋 Features

✅ **Previous & Next Navigation** - Easy navigation between pages
✅ **Page Number Buttons** - Direct page access with automatic ellipsis for large page counts
✅ **Custom Page Size** - Dropdown selector to change items per page
✅ **Fully Reusable** - Works seamlessly across different React applications
✅ **Responsive Design** - Mobile, tablet, and desktop friendly
✅ **Item Count Display** - Shows "Showing X to Y of Z items"
✅ **Current Page Indicator** - Displays current page and total pages
✅ **Customizable Props** - Configure all aspects of the component
✅ **Smooth Interactions** - Transitions and hover effects

## 📁 File Structure

```
src/
├── components/
│   └── Pagination.jsx          # Main pagination component
├── styles/
│   └── Pagination.css          # Component styles
├── App.jsx                      # Demo application
├── App.css                      # App styles
└── ...
```

## 🚀 Usage

### Basic Implementation

```jsx
import { useState } from 'react';
import Pagination from './components/Pagination';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Your data array
  const allData = [...];

  // Calculate paginated data
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = allData.slice(startIndex, endIndex);

  return (
    <>
      {/* Display paginated data */}
      <div className="items">
        {paginatedData.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>

      {/* Add Pagination Component */}
      <Pagination
        totalItems={allData.length}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </>
  );
}
```

## 📦 Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalItems` | number | 0 | Total number of items to paginate |
| `itemsPerPage` | number | 10 | Number of items displayed per page |
| `currentPage` | number | 1 | Currently active page number |
| `onPageChange` | function | () => {} | Callback function when page changes |
| `onPageSizeChange` | function | () => {} | Callback function when page size changes |
| `showPageSizeSelector` | boolean | true | Show/hide the page size dropdown |
| `pageSizeOptions` | array | [5, 10, 20, 50] | Available page size options |
| `maxPageNumbers` | number | 5 | Maximum number of page buttons to display |

## 💡 Advanced Examples

### Custom Page Size Options

```jsx
<Pagination
  totalItems={500}
  itemsPerPage={10}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  onPageSizeChange={setPageSize}
  pageSizeOptions={[10, 25, 50, 100, 250]}
  maxPageNumbers={7}
/>
```

### Hide Page Size Selector

```jsx
<Pagination
  totalItems={100}
  itemsPerPage={10}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  showPageSizeSelector={false}
/>
```

### More Page Numbers Displayed

```jsx
<Pagination
  totalItems={1000}
  itemsPerPage={20}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  maxPageNumbers={9}
/>
```

## 🎨 Styling

The component comes with pre-built styles in `src/styles/Pagination.css`. You can customize the appearance by:

1. **Override CSS variables** in your own CSS file
2. **Modify the component styles** directly in `Pagination.css`
3. **Use CSS modules** for scoped styling

### Key CSS Classes

- `.pagination-container` - Main wrapper
- `.pagination-controls` - Controls container
- `.pagination-btn` - Previous/Next buttons
- `.pagination-number` - Page number buttons
- `.pagination-number.active` - Active page button
- `.pagination-size-selector` - Page size dropdown area
- `.page-size-dropdown` - Dropdown element

## 📱 Responsive Behavior

The component is fully responsive with breakpoints for:
- **Desktop** (> 768px) - Full layout with all controls
- **Tablet** (480px - 768px) - Optimized spacing and font sizes
- **Mobile** (< 480px) - Compact layout for small screens

## 🔧 Installation

1. Copy the `Pagination.jsx` file to your `src/components/` folder
2. Copy the `Pagination.css` file to your `src/styles/` folder
3. Import and use in your components

```jsx
import Pagination from './components/Pagination';
```

## 🎯 Best Practices

1. **Always provide `totalItems`** - The component needs this to calculate total pages
2. **Handle page changes** - Implement `onPageChange` to update your data display
3. **Reset to page 1** - When filters change, reset `currentPage` to 1
4. **Validate page size** - Ensure `pageSize` doesn't exceed your data array length
5. **Smooth scrolling** - Consider scrolling to top when page changes:

```jsx
const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

## 🐛 Troubleshooting

### Pagination not appearing
- Check that `totalItems` is greater than 0
- Verify `itemsPerPage` is less than `totalItems`

### Page numbers jumping
- Ensure `currentPage` is being controlled by parent component
- Check that `onPageChange` callback updates the state

### Styles not applying
- Verify `Pagination.css` is imported in your component
- Check CSS file path is correct
- Clear browser cache

## 📈 Performance Tips

1. Use `useMemo` to prevent unnecessary re-renders of data
2. Implement virtual scrolling for very large datasets
3. Consider lazy loading data from API per page

## 🤝 Integration with APIs

```jsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

const handlePageChange = async (newPage) => {
  setLoading(true);
  try {
    const response = await fetch(`/api/items?page=${newPage}&limit=${pageSize}`);
    const result = await response.json();
    setData(result.data);
    setCurrentPage(newPage);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};
```

## 📝 License

This component is free to use in your projects.

## 🙏 Support

For issues or questions, refer to the demo in `App.jsx` for complete implementation examples.
