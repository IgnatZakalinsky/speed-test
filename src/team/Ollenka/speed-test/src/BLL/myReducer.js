import {API} from "../DAL/API";

const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const SET_TEXT_VALUE = 'SET_TEXT_VALUE';


export const getDataTC = () => async(dispatch, getState) => {
    const resp = await API.getData(getState().main.inputValue)
    dispatch(setTextValueAC(JSON.stringify(resp.data)))
};

const initialState = {
    textValue: 'Text',
    inputValue: 'Text2',
};


const myReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            };
        case SET_TEXT_VALUE:
            return {
                ...state,
                textValue: action.value
            };
        default:
            return state;
    }

};

export const setInputValueAC = (inputValue) => ({type: SET_INPUT_VALUE, inputValue});
export const setTextValueAC = (value) => ({type: SET_TEXT_VALUE, value});

export default myReducer;