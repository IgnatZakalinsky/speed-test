import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk";
import myReducer from "./myReducer";




let reducers = combineReducers({
	reducer :myReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export  default store;