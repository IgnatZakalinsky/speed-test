import React from 'react';
import PComponent from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {getDataTC, setInputValueAC, setTextValueAC} from "../BLL/myReducer";

function Container() {
    const main = useSelector((state) => state.main);

    const dispatch = useDispatch();

    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    };

    const addText = () => {
        dispatch(getDataTC())
    };

    return (
        <PComponent textValue={main.textValue} inputValue={main.inputValue}
        setInputValue={setInputValue} addText={addText}/>
    );
}

export default Container;
