import React, {useState, useRef, useEffect} from 'react'

function UseRefComp() 
{
    const [inputValue, setInputValue] = useState('')

    //Without using useRef
    // const [count, setCount] = useState(0)
    // useEffect(() =>
    // {
    //     setCount(count+1)
    // }, [count])

    //Using useRef
    const count = useRef(0)
    useEffect(() =>
    {
        count.current = count.current+1
    })

    return (
        <>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <h1>Render Count: {count.current}</h1>
        </>
    )
}

export default UseRefComp