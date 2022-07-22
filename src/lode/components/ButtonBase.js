import React from 'react';

const ButtonBase = ({isLoading = false, text = '', onClick = () => {}}) => {
	return (
		<div className="form-group" style={{marginTop:'10px'}}>
			<button onClick={onClick} type="submit" style={{display: 'flex', justifyContent: 'center',width:"100%"}} className="mybtn1">{text}</button>
		</div>
	);
};

export default ButtonBase;