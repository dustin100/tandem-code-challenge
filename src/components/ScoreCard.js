import { useEffect, useState } from 'react';
import Button from '../components/layout/Button';

const Scoreboard = ({ score }) => {
	const [text, setText] = useState(null);
	useEffect(() => {
		switch (score) {
			case 4:
			case 5:
			case 6:
				setText('Not bad! Keep trying!');
				break;
			case 7:
			case 8:
			case 9:
				setText('Wow! Will You join my trivia team');
				break;
			case 10:
				setText('You are a trivia master!');
				break;
			default:
				setText(`C'mon you can do better`);
		}
	}, [score]);

	return (
		<section className='wrapper'>
			<div className='scoreCard'>
				<p>You got {score} out of 10 Correct</p>
				<p>{text}</p>
			</div>
			<Button fn={() => window.location.reload()} text='Back Home' />
		</section>
	);
};

export default Scoreboard;
