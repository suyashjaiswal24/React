import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {


    /**
    |--------------------------------------------------
    | React Component Phases:
  
    -> INITIALIZATION
    -> MOUNTING - appear on screen
    -> UPDATION - component's state changes
    -> UNMOUNTING - refresh or new screen
    |--------------------------------------------------
    */

    const [state, setState] = useState(true)

    return (
        <>
            <button onClick={(e) => setState(!state) }>Toggle</button>
            {state ? <Counter /> : ""}
        </>
    )
}

export default App
