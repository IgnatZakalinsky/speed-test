import React from 'react';
// import './App.css';
import PComponent from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {setInputValueAC, setTextValueAC} from "../BLL/myReducer";

function Container() {
    const main = useSelector((state) => state.main);

    const dispatch = useDispatch();

    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    };

    const addText = () => {
        dispatch(setTextValueAC())
    };

    return (
        <PComponent textValue={main.textValue} inputValue={main.inputValue}
        setInputValue={setInputValue} addText={addText}/>
    );
}

export default Container;
