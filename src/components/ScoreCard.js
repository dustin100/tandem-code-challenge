import React, { useState } from 'react';
import Button from '../components/layout/Button';
import Landing from '../components/layout/Landing';
const Scoreboard = ({ score, getTenQuestion }) => {
	

	return (
		<section>
			<div className='scoreCard'>
				<p>You got {score} out of 10 Correct</p>
			</div>
			<Button fn={() => window.location.reload()} text='Back Home' />
		</section>
	);
};

export default Scoreboard;
