import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    console.log('state', state)
    console.log('action', action)

    let response = {}
    switch (action.type) {
        case 'increment':
            response = { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            response = { ...state, firstCounter: state.firstCounter + action.value }
        case 'increment2':
            response = { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement2':
            response = { ...state, firstCounter: state.firstCounter + action.value }
        case 'reset':
            response = initialState
        default:
            response = state
    }
    console.log('restponse', response)
    return response
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count is {count.firstCounter}</div>
            <div>Second is {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo
