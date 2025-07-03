import { useState, useEffect } from "react"


function Counter() {
    const [count, setCount] = useState(0)

    //1. Runs when Counter(component) is Mounted
    useEffect(() => {
      console.log("Component Mounted");
                
    }, [])


    //2. Runs when count(dependency)'s value changes - Updated. Initially assigning initial values to count var is also considers as change in state. So during mounting, initialization happens.
    useEffect(()=> {
        console.log("User updated count to: ", count);
        
    }, [count])


    //3. Runs when unmounted
    useEffect( ()=> {
        console.log("Unmounting ka UseEffect but not unmounted");
        
        //Unmounting code(cleanup code)
        return function(){
            console.log("Unmounted");   
        }
    },[] )


    //4.Jaise hi count increase hog, purana wala count unmount hoga tb call hoga or nya mount nhi hoga bas update hoga
    useEffect(() => {    
      return () => {
        console.log("Unmounting Counter:", count);
      }
    }, [count])
    


    // Variations....
    //1. Runs on every render
    useEffect(() => {
      alert("I will run on each render")       
    }) //No dep list


    //2. Runs on only first render
    useEffect(()=>{
        alert("I will run on only 1st render")
    },[]) // Empty dep list

    //3. Runs when dep changes
    useEffect(() => {
      alert("I will run every time when count changes")
    
    }, [count])
    
    
      
      function handleClick(){
        setCount((prev)=> {
            return prev + 1
        })
      }
    return (
        <>
            <h1>Hello World</h1>
            <h1>{count}</h1>
            <button onClick={handleClick}>Count</button>
        </>
    )
}

export default Counter
