import React, { useEffect, useState } from 'react'

const App = () => {
    var [count,setCount] = useState(0)

    useEffect(()=>{
        console.log(count);

    },[])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
    </div>
  )
}

export default App