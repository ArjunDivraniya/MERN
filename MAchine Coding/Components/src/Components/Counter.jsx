import React  , {useState} from 'react'

const Counter = () => {

    const [count ,setCount] =useState(0);

    const increment = () => {
        setCount((count) => count+1);
    }

    const decrement = ()  => {
        setCount((count) => count -1);
    }


  return (
    <>
    <div> Counter: {count}</div>
    {count === 10 && <div> Reached Max Count Limit</div>}
    {count === 0 && <div> Reached Min Count Limit</div>}

<button onClick = {increment} disabled={count === 10}>increment</button>
<button onClick = {decrement} disabled ={count === 0}>decrement</button>
    </>
  )
}

export default Counter