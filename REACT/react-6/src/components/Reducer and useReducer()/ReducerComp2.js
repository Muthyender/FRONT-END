import React, {useReducer, useRef} from 'react'

function reducer(state, action)
{
    switch(action.type)
    {
        case 'ADD':
            return[
                ...state,
                {
                    id:state.length,
                    name:action.name
                }
            ]

        case 'REMOVE':
            return state.filter((item, index) => index !== action.index)

        case 'CLEAR':
            return []
        
        default:
            return state
    }
}

function ReducerComp2() 
{
    const inputRef = useRef()
    const [items, dispatch] = useReducer(reducer, [])

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        const action = {
            type: 'ADD',
            name: inputRef.current.value
        }
        dispatch(action)
        inputRef.current.value = ''
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef}/>
        </form>

        <button onClick={() => dispatch({type:'CLEAR'})}>Clear List</button>

        {
            items.map((item, index) =>
            (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => dispatch({type:'REMOVE', index})}>Remove</button>
                </li>
            ))
        }
    </>
  )
}

export default ReducerComp2