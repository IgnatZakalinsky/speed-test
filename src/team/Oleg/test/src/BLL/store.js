import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({main: reducer}), applyMiddleware(thunkMiddleware));
window.store = store;
export default store;