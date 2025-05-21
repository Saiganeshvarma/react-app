import React, { useEffect, useRef, useState } from 'react'

function App(){
    var [value,setValue] = useState(0)
    var count = useRef(0)

    useEffect(()=>{
        count.current = count.current+1
        console.log(count.current);

    })
    return(
        <div>
            <button onClick={()=>{setValue(value+1)}}>+1</button>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(value-1)}}>-1</button>
            <h1>rendered {count.current}</h1>

        </div>
    )
}

export default App