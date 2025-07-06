import React from 'react'

function Input({ fullNameFn, fullName }) {
    return (
        <>
            <input type="text" onChange={(e) => fullNameFn(e.target.value)} />
            <h3>Name state variable ki value inside Input Component: {fullName}</h3>
        </>
    )
}

export default Input
