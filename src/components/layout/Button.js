import React from 'react';

const Button = ({ fn, text, disabled }) => {
	return (
		<button disabled={disabled} onClick={fn} className='btn'>
			{text}
		</button>
	);
};

export default Button;
