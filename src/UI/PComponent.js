import React from 'react';

const PComponent = props => {
    return (
        <div>
            <div>{props.textValue}</div>
            <div><input value={props.inputValue}/></div>
            <div><button>Send</button></div>
        </div>
    );
};

export default PComponent;
