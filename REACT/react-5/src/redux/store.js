import { createStore, combineReducers, applyMiddleware} from "redux";
import counterReducer from "./count/reducer";
import postsReducer from "./posts/reducer";
import reduxThunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import postReducer from "./post/reducer";

//Combining Reducers
const rootReducer = combineReducers(
    {
        count: counterReducer,
        posts: postsReducer,
        post: postReducer
    }
)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, createLogger())))

export default store