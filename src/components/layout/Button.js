import React from 'react';

const Button = ({ fn, text }) => {
	return <button onClick={fn}>{text}</button>;
};

export default Button;
