import React from 'react';
import {useSelector} from "react-redux";



const PContainer = (props) =>{



	return (
		<>
			<div>
				{props.textValue}
		    </div>
			<div>
				<input type="text" value={props.inputValue} onChange={(e)=>{props.setInputValue(e.currentTarget.value)}}/>
			</div>
			<div>
				<button onClick={props.setTextValue}>blblbl</button>
			</div>
		</>
	)
}

export default PContainer;