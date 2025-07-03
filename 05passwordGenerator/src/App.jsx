import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setnumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    return (
        <>
            <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        </>
    )
}

export default App
