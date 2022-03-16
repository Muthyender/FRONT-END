const redux = require('redux')
const {createStore} = redux

//Action type Constant
const ADD_POST = 'ADD_POST'

//Action Creater
const addPost = () =>
{
    return {
        type:ADD_POST
    }
}

/********************************************************* */

//Initial State
const initialState = {
    post: []
}

//Reducer Function
const reducerFn = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'ADD_POST' : 
            return {
                ...state,
                post: [...state.post, 'New Post'],
            }

        default : return state
    }
}

/********************************************************* */

//Store
const store = createStore(reducerFn)

const unsubscribeFun = store.subscribe(() => {})

console.log(store.getState())

store.dispatch(addPost())
store.dispatch(addPost())

console.log(store.getState())

unsubscribeFun()