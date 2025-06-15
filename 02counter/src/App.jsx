import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// I want that on clicking a button, counter value should change and reflect in UI everywhere

function App() {
    // let counter = 0
    let [counter, setCounter] = useState(0) //useState takes initial value, and returns two things in array format - variable holding initial value, and its setter method

    const addValue = () => {
        console.log("Btn clicked", Math.random());
        if(counter < 20)
            counter = counter + 1
        setCounter(counter)
        console.log(counter);
        // This will update the counter value but will not reflect in UI. To change in UI, we need to use Hooks(here useState).
        //So line 9 will not be there, instead line 10 will have useState hook. And once updated call setter in line 15
    }

    const removeValue = function(){
        if(counter > 0)
            setCounter(counter - 1)
    }
    return (
        <>
            <h1>Chai aur React</h1>
            <h2>Counter: {counter}</h2>
            <button
                onClick={addValue}
            >Add Value {counter}</button>
            <br />
            <button
                onClick={removeValue}
            >Remove Value</button>
            <p>footer: {counter}</p>
        </>
    )
}

export default App
