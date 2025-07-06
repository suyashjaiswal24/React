import React from 'react'
import { UserContext, ThemeContext } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    
    
    const sj = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext)
    
    
    function handleClick(){
        return setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div>   
            {/* <h1>UseContext value: {sj}</h1> */}
            <button onClick={handleClick}>
                Change Theme
            </button>
        </div>
    )
}

export default ChildC
