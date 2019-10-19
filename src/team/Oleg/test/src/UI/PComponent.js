import React from 'react';

class PComponent extends React.Component {


    render = () => {
        return (
            <>
                <div>text</div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <button>send</button>
                </div>
            </>
        );
    }
}
export default PComponent;