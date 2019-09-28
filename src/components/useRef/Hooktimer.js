import React, { useState, useEffect,useRef } from 'react'

function Hooktimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef)}>clearInterval</button>
        </div>
    )
}

export default Hooktimer
