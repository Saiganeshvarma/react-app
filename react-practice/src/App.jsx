import React from 'react'

function App(){
    var result = true
    var output
    if(result){
        output = <h1>hello world1</h1>
    }else{
        output = <h1>hello world2
    }

    return(
        <div>{output}</div>
    )
}

export default App