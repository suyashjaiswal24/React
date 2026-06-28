import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
// import { useRandomUser } from './hooks/user-random'

function App() {

    // const { user, fetchRandomUser, isFetching, error } = useRandomUser();
    // const [count, setCount] = useState(1);
    const [flag, setFlag] = useState(false);
    return (
        <>
            {/* <h1>Hello ji</h1>
            <button onClick={fetchRandomUser}>Fetch Random User</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user ? (
                isFetching ? (
                    <p>Loading...</p>
                ) : (<h1>{user.name.first} {user.name.last}</h1>)
            ) : "No User Fetched Yet"} */}

            {/* <button onClick={() => setCount(count + 1)}>Add Counter</button> */}

            {/*new Array(count).fill(null).map(() => <Counter />)*/}  {/*Render 10 Counter components using map */}


            {/* Importance of 'key' prop in react:
            In below example, based on the value of flag, we are rendering either Virat's counter or Rohit's counter. I increased the counter of Virat(say 10), and then switch to Rohit, it shows 10 for Rohit as well. We expected that as Viratb and Rohit are different cpmponents, they should have their own state. What's happenning behind the scene is React only sees that the props is only changed not the whole component(with state), so it only updates the props and not the state. So to fix this, we need to give a unique key prop to each component, so that React can identify them as different components and maintain their own state. */}

            
            <button onClick={() => setFlag(!flag)}>Toggle Counter</button>   
            {/* {flag ? <Counter playerName="Virat" /> : <Counter playerName="Rohit" />} */}
            {flag ? <Counter key="virat" playerName="Virat" /> : <Counter key="rohit" playerName="Rohit" />}
            
            {/* Here we are rendering two different counters for Dhoni and Jadeja, so they will have their own state and will not interfere with each other. */}
            <Counter playerName="Dhoni" />
            <Counter playerName="Jadeja" />
        </>
    )
}

export default App
