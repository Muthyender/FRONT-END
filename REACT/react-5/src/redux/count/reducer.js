import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./action"

//Initial State
const initialCountState = {
    count: 0
}

//Reducer Function
const counterReducer = (state = initialCountState, action) =>
{
    switch(action.type)
    {
        case INCREMENT_COUNTER :
            return {
                ...state,
                // count: state.count + 1 
                count: state.count + action.payload 
            }

        case DECREMENT_COUNTER :
            return {
                ...state,
                // count: state.count - 1 
                count: state.count - action.payload 
            }
            
        default :
            return state
    }
}

export default counterReducer