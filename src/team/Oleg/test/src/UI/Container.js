import React from 'react';
import PComponent from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {getDataTC, setInputValueAC, setTextValueAC} from "../BLL/reducer";

function Container() {
    const main = useSelector(state=>state.main)
    const dispatch = useDispatch()
    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    }
    const setTextValue = () => {
        dispatch(getDataTC())
    }
    return (
        <PComponent textValue={main.textValue}
                    inputValue={main.inputValue} setInputValue={setInputValue} setTextValue={setTextValue}/>
    );
}

export default Container