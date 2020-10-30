import React from 'react';

const Filler = ({ percentage }) => {
	return <div className='filler' style={{ width: `${percentage * 10}%` }} />;
};

export default Filler;
