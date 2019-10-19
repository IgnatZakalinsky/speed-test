import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Route} from "react-router-dom";

function PComponent(props) {
    return (<>
            <div>{props.textValue}</div>
            <div><input value={props.inputValue}/></div>
            <div><button>Send</button></div>
        </>

    );
}

export default PComponent;
