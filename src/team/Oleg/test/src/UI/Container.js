import React from 'react';
import PComponent from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {setInputValueAC, setTextValueAC} from "../BLL/reducer";

function Container() {
    const main = useSelector(state=>state.main)
    const dispatch = useDispatch()
    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    }
    const setTextValue = () => {
        dispatch(setTextValueAC())
    }
    return (
        <PComponent textValue={main.textValue}
                    inputValue={main.inputValue} setInputValue={setInputValue} setTextValue={setTextValue}/>
    );
}

export default Container