import React, { useReducer } from 'react'

function reducer(state, action) 
{
  switch(action.type)
  {
    case 'LOGIN':
      return {
        username: action.payload.username,
        isAuth: true
      }

    case 'LOGOUT':
      return {
        username: "",
        isAuth: false
      }

    default:
      return state
  }
}

const initialState = {
    username: 'rohan',
    isAuth: true
}

function ReducerComp() 
{   
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleLogin = () =>
    {
        dispatch({type: 'LOGIN', payload:{username: "Muthu"}})
    }

    const handleLogout = () =>
    {
        dispatch({type: 'LOGOUT'})
    }

    return (
        <>
            Current User: {state.username}, isAuthenticated: {state.isAuth ? 'YES' : 'NO'}

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default ReducerComp
