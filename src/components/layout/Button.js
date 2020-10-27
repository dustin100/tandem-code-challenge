import React from 'react';

const Button = ({ fn, text, disabled, className }) => {
	return (
		<button disabled={disabled} onClick={fn} className={className}>
			{text}
		</button>
	);
};

export default Button;
