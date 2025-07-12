import ChildA from './components/ChildA'
import './App.css'
import { createContext, useState } from 'react'



// useContext is used to avoid Props Drilling - if parent wants to pass some data to childC, using props, it will be 1st passed to A then to B then to C. So A & B are not requiring those values still we have to pass through them. This is called Props Drilling. To avoid this we use this hook.
// Steps:
// 1. create the context at the top of function using createContext()
// 2. Wrap the child to whom I want to pass the data. (Here wrapping A as A calls B and B calls C and we want to have data in C)
// 3. In Child C, consume the context using useContext(<context wrapping name>) and store in a variable
// 4. Use that variable 

var UserContext = createContext()
var ThemeContext = createContext()
function App() {

    const [user, setuser] = useState("Suyash")
    const [theme, setTheme] = useState("light")
    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <UserContext.Provider value={user}>
                    <div id='container' style={{backgroundColor: theme==='light'? 'beige': 'black'}}>
                        <ChildA />
                    </div>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}

export default App
export { UserContext }
export { ThemeContext }
