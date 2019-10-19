import React from 'react';

const PComponent= props => {

        return (
            <>
                <div>{props.textValue}</div>
                <div>
                    <input type="text" value={props.inputValue} onChange={e => props.setInputValue(e.currentTarget.value)}/>
                </div>
                <div>
                    <button onClick={props.setTextValue}>send</button>
                </div>
            </>
        );
}
export default PComponent;