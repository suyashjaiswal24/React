import './App.css'
import { useRandomUser } from './hooks/user-random'

function App() {

    const { user, fetchRandomUser, isFetching, error } = useRandomUser();
    return (
        <>
            <h1>Hello ji</h1>
            <button onClick={fetchRandomUser}>Fetch Random User</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user ? (
                isFetching ? (
                    <p>Loading...</p>
                ) : (<h1>{user.name.first} {user.name.last}</h1>)
            ) : "No User Fetched Yet"}
        </>
    )
}

export default App
