import {API} from "../DALL/api";

const SET_IPUT_VALUE = 'SET_IPUT_VALUE';
const SET_TEXT_VALUE = 'SET_TEXT_VALUE';




let initialState = {
	textValue: 'react',
	inputValue: 'redux'
};

const myReducer = (state = initialState, action) => {

	switch (action.type) {
		case  SET_TEXT_VALUE: {
			return  {
				...state,
				textValue: action.value
			};
		}

		case  SET_IPUT_VALUE: {
			return  {
				...state,
				inputValue: action.inputValue
			};
		}


		default:
			return state;

	}
};


export const setInputAC = (inputValue) =>({type: SET_IPUT_VALUE, inputValue});
export const setTextAC = (value) =>({type: SET_TEXT_VALUE, value});

//thunkCreater
export const getDataAC = () => async (dispatch, getState) => {
	let resp = await API.getData(getState().main.inputValue)
	dispatch(setTextAC( JSON.stringify(resp.data)));
};




export default myReducer;