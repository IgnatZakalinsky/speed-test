import React from 'react';
import PContainer from "./PContaner";
import {useDispatch, useSelector} from "react-redux";
import {getDataAC, setInputAC, setTextAC} from "../BLL/myReducer";


const Contaner = (props) =>{

	const main = useSelector((state) => state.main)
	const  dispatch = useDispatch()

	const setInputValue = (value) => {
		dispatch (setInputAC (value))
	}
    const setTextValue = () => {
		dispatch (getDataAC ())
	}


	return (
		<PContainer setInputValue={setInputValue} setTextValue={setTextValue}
		                   inputValue={main.inputValue} textValue={main.textValue} />
	)
}

export default Contaner;