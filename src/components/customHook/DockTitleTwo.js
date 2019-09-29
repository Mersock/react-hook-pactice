import React, { useEffect,useState } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle';

function DockTitleTwo() {
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

export default DockTitleTwo
