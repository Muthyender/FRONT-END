const redux = require('redux')
const {createStore} = redux

//Action type Constant
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

//Action
// {
//     type: INCREMENT_COUNTER
// }

// {
//     type: DECREMENT_COUNTER
// }

//Action Creater
const incrementCount = () =>
{
    return {
        type:INCREMENT_COUNTER
    }
}

const decrementCount = () =>
{
    return {
        type:DECREMENT_COUNTER
    }
}

/********************************************************* */

//Initial State
const initialState = {
    count:0,
}

//Reducer Function: 
//  - Contains initial state
//  - Contains two parammeters - prevState and action
//  - On the basis of action, it will return the updated state (logic)

const reducerFn = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'INCREMENT_COUNTER' : 
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT_COUNTER' : 
            return {
                ...state,
                count: state.count - 1,
            }

        default : 
            return state
    }
}

/********************************************************* */

//Store
const store = createStore(reducerFn)

//getState() - returns the current state
console.log(store.getState())

const unsubscribeFun = store.subscribe(() => {})

store.dispatch(incrementCount())
console.log(store.getState())

store.dispatch(incrementCount())
console.log(store.getState())

store.dispatch(incrementCount())
console.log(store.getState())

store.dispatch(decrementCount())
console.log(store.getState())

store.dispatch(decrementCount())
console.log(store.getState())

unsubscribeFun()