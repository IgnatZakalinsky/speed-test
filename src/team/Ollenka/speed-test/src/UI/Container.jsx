import React from 'react';
// import './App.css';
import PComponent from "./PComponent";
import {useSelector} from "react-redux";

function Container() {
    const main = useSelector((state) => state.main);
    return (
        <PComponent textValue={main.textValue} inputValue={main.inputValue}/>
    );
}

export default Container;
