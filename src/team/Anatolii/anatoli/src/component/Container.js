import React from 'react'
import PComponent from "./PComponent";
import {useDispatch, useSelector} from "react-redux";
import {setInputAC, setValueAC} from "./BLL/Reducer";

let Container = (props) => {

    const dispatch = useDispatch()

    const setInputValue = (value) =>{
        dispatch(setInputAC(value))
    }
    const AddValue = () =>{
        dispatch(setValueAC())
    }

    const main = useSelector ((state)=>state.main)
    return  <div>
        <PComponent inputValue={main.inputValue}
                    textValue={main.textValue}
                    setInputValue={setInputValue}
                    AddValue={AddValue}/>
    </div>
}


    export default Container