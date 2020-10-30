import Button from '../components/layout/Button';
const Scoreboard = ({ score }) => {
	return (
		<section className='wrapper'>
			<div className='scoreCard'>
				<p>You got {score} out of 10 Correct</p>
			</div>
			<Button fn={() => window.location.reload()} text='Back Home' />
		</section>
	);
};

export default Scoreboard;
