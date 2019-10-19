import React from'react'
import {Reducer} from "./reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
main: Reducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;