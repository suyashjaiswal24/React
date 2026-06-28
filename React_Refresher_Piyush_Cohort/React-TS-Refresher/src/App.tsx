import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
// import { useRandomUser } from './hooks/user-random'

function App() {

    // const { user, fetchRandomUser, isFetching, error } = useRandomUser();
    const [count, setCount] = useState(1);
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

            <button onClick={() => setCount(count + 1)}>Add Counter</button>

            {new Array(count).fill(null).map(() => <Counter />)}  {/*Render 10 Counter components using map */}
        </>
    )
}

export default App
