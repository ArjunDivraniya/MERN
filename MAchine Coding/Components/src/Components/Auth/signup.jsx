import React from 'react'

const signup = () => {
  return (
    <>
    <div>signup</div>
    <form>
        <input type = 'text' placeholder='Enter Your Name' ></input>
        <input type = 'email' placeholder='Enter Your email' ></input>
        <input type = 'password' placeholder='Enter Your Password' ></input>
        <button type='submit' > Sign up</button>
    </form>
    </>
  )
}

export default signup