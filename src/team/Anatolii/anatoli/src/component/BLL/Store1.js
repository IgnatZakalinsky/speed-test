import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import OReducer from "./Reducer";


let reducers = combineReducers({
    main: OReducer

})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store