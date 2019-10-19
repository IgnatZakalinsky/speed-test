import React from 'react'
const PComponents=(props)=> {
    return (
        <div>
            <div>{props.textValue}</div>
            <div><input type="text" name="" id="" value={props.inputValue}/></div>
            <div><button>Send</button></div>
        </div>
    )

}
export default PComponents