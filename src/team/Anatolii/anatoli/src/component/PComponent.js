import React from 'react'

let PComponent = (props) => {

    let Change = (e)=>{
       let text =  e.currentTarget.value
        props.setInputValue(text)

    }

    let Send = ()=>{
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