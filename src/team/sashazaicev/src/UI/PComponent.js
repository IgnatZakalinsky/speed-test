import React from 'react'
const PComponents=(props)=> {
    return (
        <div>
            <div>{props.textValue}</div>
            <div><input type="text" name="" id="" onChange={(e)=> props.setInputValue(e.currentTarget.value)} value={props.inputValue}/></div>
            <div><button onClick={props.setTextValue}>Send</button></div>
        </div>
    )

}
export default PComponents