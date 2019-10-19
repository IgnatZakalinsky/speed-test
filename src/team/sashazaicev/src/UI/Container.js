import React from 'react'
import PComponents from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {getDataTC, setInputValueAC, setTextValueValueAC} from "../BLL/reducer";

const Container = (props) => {
    const main = useSelector((state) => state.main);
    const dispatch = useDispatch();
    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    };
    const setTextValue = () => {
        dispatch(getDataTC())
    };

    return (
        <div>
            <PComponents setInputValue={setInputValue} setTextValue={setTextValue} textValue={main.textValue}
                         inputValue={main.inputValue}/>
        </div>
    )

}
export default Container