import { Fragment, useState } from 'react';
import Button from '../components/layout/Button';
import Scoreboard from './ScoreCard';

const Quiz = ({ data }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [userIsCorrect, setUserIsCorrect] = useState(null);
	const [madeChoice, setMadeChoice] = useState(false);

	const nextQuestion = () => {
		const next = currentQuestion + 1;
		setCurrentQuestion(next);
		setUserIsCorrect(null);
		setMadeChoice(false);
	};

	const checkAnswer = (e) => {
		setMadeChoice(true);

		const userAnswer = e.target.textContent;
		const correctAnswer = data[currentQuestion].correct;

		if (correctAnswer === userAnswer) {
			const currentScore = score + 1;
			setScore(currentScore);
			setUserIsCorrect(true);
		} else {
			setUserIsCorrect(false);
		}
	};

	if (currentQuestion > data.length - 1) return <Scoreboard score={score} />;

	// reveals to the user if they're right or wrong
	const reveal = userIsCorrect ? (
		<Fragment>
			<p className='correct'>
				<i class='far fa-check-circle'></i> Correct
			</p>
		</Fragment>
	) : (
		<Fragment>
			<p className='incorrect'>
				<i class='far fa-times-circle'></i>
				{data[currentQuestion].correct}
			</p>
		</Fragment>
	);

	// map though the choices
	const answersKey = data[currentQuestion].choices.map((item) => {
		return (
			<Button
				key={item}
				disabled={madeChoice}
				text={item}
				fn={(e) => checkAnswer(e)}
			/>
		);
	});

	return (
		<div className='quiz'>
			<p className='question'>{data[currentQuestion].question}</p>
			<div className='choices'>{answersKey}</div>
			{madeChoice && reveal}
			<Button text='next question' disabled={!madeChoice} fn={nextQuestion} />
		</div>
	);
};

export default Quiz;
