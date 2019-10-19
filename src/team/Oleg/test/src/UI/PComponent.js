import React from 'react';

const PComponent= props => {

        return (
            <>
                <div>{props.textValue}</div>
                <div>
                    <input type="text" value={props.inputValue}/>
                </div>
                <div>
                    <button>send</button>
                </div>
            </>
        );
}
export default PComponent;