import React from 'react';




function PComponent(props) {
    return (<>
            <div>{props.textValue}</div>
            <div>
                <input onChange={(e) => props.setInputValue(e.currentTarget.value)}
                    value={props.inputValue}/>
            </div>
            <div><button onClick={props.addText}>Send</button></div>
        </>

    );
}

export default PComponent;
