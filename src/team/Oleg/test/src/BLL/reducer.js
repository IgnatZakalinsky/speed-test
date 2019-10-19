const SET_INPUT_VALUE = "SPEAD_TEST/SET_INPUT_VALUE";
const SET_TEXT_VALUE = "SPEAD_TEST/SET_TEXT_VALUE";

const initialState = {
    textValue: "Text",
    inputValue: "Text2"
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state, inputValue: action.inputValue
            }
        case SET_TEXT_VALUE:
            return {
                ...state, textValue: state.inputValue
            }
        default:
            return state

    }

}

export const setInputValueAC = (inputValue)=> ({
    type: SET_INPUT_VALUE, inputValue
})
export const setTextValueAC = ()=> ({
    type: SET_TEXT_VALUE
})
