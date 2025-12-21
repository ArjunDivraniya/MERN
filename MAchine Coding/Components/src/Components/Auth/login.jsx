import React from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/home');
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter Your Email' />
        <input type='password' placeholder='Enter Your password' />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default login