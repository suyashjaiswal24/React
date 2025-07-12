import { useState, useMemo } from 'react'

import './App.css'

function App() {

    const [counter, setCounter] = useState(0)
    const [input, setinput] = useState(2)


    // When state changes, component re-renders, and again this whole App() function will be called in which line 18 will be called which calls below function.
    function expensiveTask(num){
        console.log("Inside expensiveTask")
        for(let i=0; i<1000000000; i++){}
        return num *2;
    }

    //let result = expensiveTask(2)

    //useMemo hook used to store the expensive task's result. If input var is same in next re render then the expensive fn will not be called again.
    
    useMemo(() => expensiveTask(input), [input])

    

    return (
        <div>
            <h1>Hello {counter}</h1>
            <button onClick={()=> setCounter(counter+1)}>
                Click
            </button>
            <br />
            <input type="number" placeholder='enter num' value={input} onChange={(e) => setinput(e.target.value)} />
        </div>
    )
}

export default App
