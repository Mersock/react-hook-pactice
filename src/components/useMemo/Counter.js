import React, { useState,useMemo } from 'react'

function Counter() {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementOne = () => {
        setCounterone(counterone + 1)
    }

    const incrementTwo = () => {
        setCountertwo(countertwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000) i++
        console.log(i)
        return counterone % 2 === 0
    }, counterone)

    // const isEven = () => {
    //     let i = 0
    //     while (i < 200000) i++
    //     console.log(i)
    //     return counterone % 2 === 0
    // }

    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterone}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <br />
            <button onClick={incrementTwo}>Count Two - {countertwo}</button>
        </div>
    )
}

export default Counter
