import React, { useState, useEffect } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle';

function DockTitleOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
        return () => {
            
        };
    }, [count])

    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DockTitleOne
