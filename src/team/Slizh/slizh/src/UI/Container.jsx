import React from 'react';
import PContainer from "./PContaner";
import {useSelector} from "react-redux";


const Contaner = (props) =>{

	const main = useSelector((state) => state.main)

	return (
		<PContainer inputValue={main.inputValue} textValue={main.textValue} />
	)
}

export default Contaner;