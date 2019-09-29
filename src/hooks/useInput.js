import { useState } from 'react'

function useInput(iniialValue) {
    const [value, setValue] = useState(iniialValue)
    
    const reset = () => {
        setValue(iniialValue)
    }

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput
