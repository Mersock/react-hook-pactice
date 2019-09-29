import React, { useState } from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');


    const submitHandler = e => {
        e.preventDefault()
        console.log(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>firstName</label>
                    <input
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>lastName</label>
                    <input
                        {...bindLastName}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
