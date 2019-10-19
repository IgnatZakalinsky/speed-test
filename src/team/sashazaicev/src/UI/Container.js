import React from 'react'
import PComponents from "./PComponent";
import {useSelector} from "react-redux";

const Container = (props) => {
const main = useSelector((state)=> state.main);
    return (
        <div>
            <PComponents textValue={main.textValue} inputValue={main.inputValue} />
        </div>
    )

}
export default Container