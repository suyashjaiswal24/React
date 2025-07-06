
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'

function App() {
    
    const [count, setCount] = useState(0)
    const [fullName, setfullName] = useState("")

    const handleClick = () => {
        return setCount(count + 1)
    }

    return (
        <>
            <Card name="sj" clickWalaFunction={handleClick}> {/*Passing props from Paren(App) to child(Card). Also passing fn as props from parent to child*/} 
                 <h1>Hello Suyash</h1> {/*Child of Card  */}
            </Card>
            <h1>{count}</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Code for state lifting */}
            <h1>State Lifting</h1>
            <Input fullName={fullName} fullNameFn={setfullName}/>
            <h3>Name value in Parent Component changed from child: {fullName}</h3>
        </>
    )
}

export default App
