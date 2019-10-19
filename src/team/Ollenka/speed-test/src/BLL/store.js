import {createStore, applyMiddleware, combineReducers} from "redux";
import myReducer from "./myReducer";
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
   main: myReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;