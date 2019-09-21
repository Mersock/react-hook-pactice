import React, { useState } from 'react'

function HookCounterThree() {

    const initialState = {
        firstName: '',
        lastName: ''
    }

    const [name, setName] = useState(initialState)

    return (
        <div>
            <input type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>Your firstName is {name.firstName}</h2>
            <h2>Your firstName is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
