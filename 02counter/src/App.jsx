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
        // if(counter < 20)
        //     counter = counter + 1
        // setCounter(counter)
        // console.log(counter);
        // This will update the counter value but will not reflect in UI. To change in UI, we need to use Hooks(here useState).
        //So line 9 will not be there, instead line 10 will have useState hook. And once updated call setter in line 15


        //Interview Question: what happens when setCounter is called multiple times:
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // This will still increment by 1 only(we were expecting that on clicking it should increment by 4 times, but that didn't happen.)
        // So here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once. So, the counter will increase by only 1 count.

        // To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So, the first function will be called first, the callback will be executed and the next function call will be executed.

        setCounter( (prevCounter)=> {
           return prevCounter + 1
        } )
        setCounter( (prevCounter)=> {
           return prevCounter + 1
        } )
        setCounter( (prevCounter) => prevCounter + 1)
        setCounter( prevCounter => prevCounter + 1)

        //Summary:
        /*Initial State: Assume count is initially 69.
        First Call: setCount(count + 1) schedules a state update to set count to 70 (69 + 1).
        Second Call: setCount(count + 1) schedules another state update to set count to 70 (69 + 1), because count is still 69 in this scope.
        Third Call: setCount(count + 1) schedules yet another state update to set count to 70 (69 + 1), again because count is still 69 in this scope.

        In case of functional updater syntax React ensures that changes are made to the latest state of the count hence each function gets access to the latest state of the count variable:
        First Call: setCount(count =>count+1) schedules a state update to set count to 70
        Second Call : schedules a state update to set count to (70+1) because count is now 70 in this scope and so on... */

        //One Observation:
        /*Can i say that it also depends on how you are passing an argument to the setterMethod; 
        1.  If you will pass simple variable to settermethod without callbackfunction it will refer that variable which you passed as argument, because we passed 4 times the same argument which is 15 that's why we got 16.
        2. On the otherhand, when we use callback() function inside setterMethod() because the settermethod() returns a updatedvar which is accepted by callback is modified one that's why we are able to increment the variable 4 times. The callback is not refering the var is we passing instead it refering the var which is in the object of useState specific variable I mean counter, setCounter are a part of single object so the setCounter is refering the counter using this.counter that's the callback gets the returned var which is updated */

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
