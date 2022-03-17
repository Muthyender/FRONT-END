const redux = require('redux')
const reduxLogger = require('redux-logger')
const {createStore, combineReducers, applyMiddleware} = redux
const {createLogger} = reduxLogger

//Action type Constant
const ADD_POST = 'ADD_POST'

//Action Creater
const addPost = (postName) =>
{
    return {
        type:ADD_POST,
        payload: postName
    }
}

//Initial State
const postInitialState = {
    post: [],
}

//Reducer Function
const postReducer = (state = postInitialState, action) =>
{
    switch(action.type)
    {
        case 'ADD_POST' : 
            return {
                ...state,
                post: [...state.post, action.payload ],
            }

        default : 
            return state
    }
}

/********************************************************* */

//Action type Constant
const INCREMENT_FOLLOWER_COUNT = 'INCREMENT_FOLLOWER_COUNT'

//Action Creater
const incrementFollowerCount = () =>
{
    return {
        type:INCREMENT_FOLLOWER_COUNT
    }
}


//Initial State
const followerInitialState = {
   followers: 0,
}

//Reducer Function
const followerReducer = (state = followerInitialState, action) =>
{
    switch(action.type)
    {
        case 'INCREMENT_FOLLOWER_COUNT' : 
            return {
                ...state,
                followers: state.followers + 1,
            }

        default : 
            return state
    }
}




/********************************************************* */
//Combining Reducers
const rootReducer = combineReducers(
    {
        post: postReducer,
        follower: followerReducer
    }
)

//Store
const store = createStore(rootReducer, applyMiddleware(createLogger()))

const unsubscribeFun = store.subscribe(() => {})

// console.log(store.getState())

store.dispatch(addPost('Mountains vs Beaches'))
// console.log(store.getState())

store.dispatch(incrementFollowerCount())
// console.log(store.getState())

store.dispatch(addPost('Travel Diaries'))
// console.log(store.getState())

unsubscribeFun()