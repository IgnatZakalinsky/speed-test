import React from 'react';
import {useSelector} from "react-redux";



const PContainer = (props) =>{



	return (
		<>
			<div>
				{props.textValue}
		    </div>
			<div>
				<input type="text" value={props.inputValue}/>
			</div>
			<div>
				<button>blblbl</button>
			</div>
		</>
	)
}

export default PContainer;