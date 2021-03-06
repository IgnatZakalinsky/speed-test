import React from 'react'
import {API} from "../DAl/API";

export const SET_INPUT_VALUE = "SpeedTest/team/SET_INPUT_VALUE";
export const SET_TEXT_VALUE = "SpeedTest/team/SET_TEXT_VALUE";


const initialState = {
    textValue: 'Text',
    inputValue: 'Text2',
}
export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE: {
            return {
                ...state, inputValue: action.inputValue
            }
        }
        case SET_TEXT_VALUE: {
            return {
                ...state, textValue: action.value
            }
        }
        default:
            return state

    }
};
export const setInputValueAC = (inputValue) => ({type: SET_INPUT_VALUE, inputValue:inputValue});
export const setTextValueValueAC = (value) => ({type: SET_TEXT_VALUE, value});
export const getDataTC =()=> async (dispatch,getState)=> {
    const resp = await API.getData(getState().main.inputValue)
    dispatch(setTextValueValueAC(JSON.stringify(resp.data)))
}