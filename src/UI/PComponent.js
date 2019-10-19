import React from 'react';

const PComponent = props => {
    return (
        <div>
            <div>
                {props.textValue}
            </div>
            <div>
                <input
                    value={props.inputValue}
                    onChange={(e) => props.setInputValue(e.currentTarget.value)}
                />
            </div>
            <div>
                <button onClick={props.setTextValue}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default PComponent;
