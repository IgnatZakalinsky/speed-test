import React from 'react'

let PComponent = (props) => {
    let Change = (e) => {
        props.setInputValue(e.currentTarget.value)
    }

    let Send = () => {
        props.AddValue()
    }

    return (
        <div>
            <div>{props.textValue}</div>
            <div><input onChange={Change} value={props.inputValue}/></div>
            <div>
                <button onClick={Send}>Send</button>
            </div>
        </div>
    )
}


export default PComponent