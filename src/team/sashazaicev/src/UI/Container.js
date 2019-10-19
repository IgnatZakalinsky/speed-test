import React from 'react'
import PComponents from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {setInputValueAC, setTextValueValueAC} from "../BLL/reducer";

const Container = (props) => {
    const main = useSelector((state) => state.main);
    const dispatch = useDispatch();
    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    };
    const setTextValue = () => {
        dispatch(setTextValueValueAC())
    }
    return (
        <div>
            <PComponents setInputValue={setInputValue} setTextValue={setTextValue} set textValue={main.textValue}
                         inputValue={main.inputValue}/>
        </div>
    )

}
export default Container