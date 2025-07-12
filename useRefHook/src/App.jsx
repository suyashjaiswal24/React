import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

    const [counter, setCounter] = useState(0)

    // let val = 1
    let val = useRef(1) // useRef returns an object and the value is stored inside 'current' property of that object. 1 is initialised 

    function handleClick() {
        // val = val + 1 //everytime re-renders, val becomes 1 and 1+1 =2
        // console.log("Val: ", val)

        val.current = val.current + 1 //updates prev value
        console.log("Val: ", val.current)
        setCounter(counter + 1)
    }

    // No dep. list, so renders on every change
    useEffect(() => {
        console.log("I rendered again")
    })


    let btnRef = useRef() // initialised ref

    function changeColor(){
        btnRef.current.style.backgroundColor = "red" //using ref, we selected that btn and modified its property
    }

    return (
        <>
            {/* useRef is used in two situations:
            a. to have a variable whose value remains persistent during re-render - common variable for every render(not reinitilizes on every render)
            b. to get any DOM element(just like getElementById or etc) so that e can modify  */}
            <h1>Count: {counter}</h1>

            <br />

            <h2>Val: {val.current}</h2>

            <button onClick={handleClick}>Click me</button>

            <br /><br />

            <button onClick={changeColor}>Change Color</button>
            <button ref={btnRef}>Color</button> // added ref in btn
        </>
    )
}

export default App
