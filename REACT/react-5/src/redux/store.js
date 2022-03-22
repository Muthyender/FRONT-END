import { createStore } from "redux";
import counterReducer from "./count/reducer";

const store = createStore(counterReducer)

export default store