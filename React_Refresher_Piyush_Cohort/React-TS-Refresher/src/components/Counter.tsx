import React from 'react'
import './Counter.css'

const Counter: React.FC<{ playerName: string }> = ({ playerName }) => {
    const [count, setCount] = React.useState(0)

    console.log(`${playerName}'s score: ${count}`)

    return (
        <div className="counter-container">
            <div className="counter-card">
                <h1 className="counter-title">{playerName}'s Counter</h1>
                <div className="counter-display">
                    <span className="counter-value">{count}</span>
                </div>
                <div className="counter-buttons">
                    <button
                        className="btn btn-decrement"
                        onClick={() => setCount(Math.max(0, count - 1))}
                    >
                        −
                    </button>
                    <button
                        className="btn btn-increment"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter
