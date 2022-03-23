import { FETCH_POST_REQUESTED, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./action";

//Initial State
const InitialState = {
    loading: false,
    post: {},
    error: ''
}

//Reducer Function
const postReducer = (state = InitialState, action) =>
{
    switch(action.type)
    {
        case FETCH_POST_REQUESTED:     
            return {
                ...state,
                loading: true
            }

            case FETCH_POST_SUCCESS:     
            return {
                ...state,
                loading: false,
                post: action.payload
            }

            case FETCH_POST_FAILURE:     
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            default : 
                return state
    }
}

export default postReducer