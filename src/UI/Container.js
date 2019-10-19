import React from 'react';
import PComponent from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {getData, setInputValueAC} from "../BLL/myReducer";

function Container() {
    const main = useSelector(state => state.main);
    const dispatch = useDispatch();

    const setInputValue = (inputValue) => {
        dispatch(setInputValueAC(inputValue))
    };
    const setTextValue = () => {
        dispatch(getData())
    };
    return (
        <PComponent
            textValue={main.textValue}
            inputValue={main.inputValue}
            setInputValue={setInputValue}
            setTextValue={setTextValue}
        />
    );
}

export default Container;
