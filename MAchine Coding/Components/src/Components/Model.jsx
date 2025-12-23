import React, { useState, useEffect } from 'react'

const Model = () => {
  const [open, setOpen] = useState(false)

 
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <div>
        <h1>Modal Component</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugiat sit
          facilis eveniet itaque voluptas rem officiis labore culpa id?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugiat sit
          facilis eveniet itaque voluptas rem officiis labore culpa id?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugiat sit
          facilis eveniet itaque voluptas rem officiis labore culpa id?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugiat sit
          facilis eveniet itaque voluptas rem officiis labore culpa id?
        </p>
        <button onClick={() => setOpen(true)}>Open Modal</button>
      </div>

      {open && (
        <div style={overlayStyle} onClick={() => setOpen(false)}>
          <div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
           
          >
            <h2>Modal Content</h2>
            <button onClick={() => setOpen(false)} >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Model

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const modalStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
  minWidth: '300px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
}
