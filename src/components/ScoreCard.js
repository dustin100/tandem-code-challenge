import Button from '../components/layout/Button';
const Scoreboard = ({ score }) => {
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
