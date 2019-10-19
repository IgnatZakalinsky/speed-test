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
				textValue: state.inputValue
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
export const setTextAC = () =>({type: SET_TEXT_VALUE});

//thunkCreater




export default myReducer;