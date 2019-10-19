import React from 'react'
import PComponent from "./PComponent";
import {useSelector} from "react-redux";

let Container = (props) => {

    const main = useSelector ((state)=>state.main)
    return  <div>
        <PComponent inputValue={main.inputValue} textValue={main.textValue}/>
    </div>
}


    export default Container