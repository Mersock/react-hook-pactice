import React, { useState } from 'react'

function HookCounterFour() {
    const initialState = [];
    const [items, setItems] = useState(initialState)

    const listItem = items.map(item => (
        <ul>
            <li key={item.id}>{item.value}</li>
        </ul>
    ));

    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    return (
        <div>
            <button onClick={addItem}>Add na number</button>
            {listItem}
        </div>
    )
}

export default HookCounterFour
