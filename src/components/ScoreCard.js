import React from 'react';
const Scoreboard = ({ score }) => {
	return (
		<section>
			<div className='scoreCard'>
				<p>You got {score} out of 10 Correct</p>
			</div>
		</section>
	);
};

export default Scoreboard;
