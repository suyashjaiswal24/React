import React from 'react'

const Card = (props) => {



    return (
        <div>
            <h1>Hello From Card</h1>
            <p>Card ka Para</p>
            {props.children} {/*To call child of Card*/}
            <button onClick={props.clickWalaFunction}>Click Me</button>
        </div>
    )
}

export default Card
