import {API} from "../DAL/API";


const SET_TEXT_VALUE = 'SET_TEXT_VALUE'
const SET_INPUT_VALUE = 'SET_INPUT_VALUE'

const initialState = {
    textValue: 'Text',
    inputValue: 'Text2'

}

const OReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT_VALUE:
            return {
                ...state,
                textValue: action.value
            };
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            };


        default:
            return state
    }
}


export const setValueAC = (value) => ({type: SET_TEXT_VALUE,value})
export const setInputAC = (inputValue) => ({type: SET_INPUT_VALUE, inputValue})

export const getDataTC = () => async (dispatch,getState) => {
    const res = await API.getData(getState().main.inputValue)
    dispatch(setValueAC(JSON.stringify(res.data)));
}


export default OReducer