import { Fragment, useState } from 'react';
import Button from '../components/layout/Button';
import Scoreboard from '../components/Scoreboard';

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

	const reveal = userIsCorrect ? (
		<Fragment>
			<p>You're right</p>
		</Fragment>
	) : (
		<Fragment>
			<p>you're wrong the correct answer is {data[currentQuestion].correct}</p>
		</Fragment>
	);

	if (currentQuestion > data.length - 1) return <Scoreboard score={score} />;

	// map though the answers
	const answersKey = data[currentQuestion].answers.map((item) => {
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
		<div>
			<p>{data[currentQuestion].question}</p>
			{answersKey}
			{madeChoice && reveal}
			<Button text='next' disabled={!madeChoice} fn={nextQuestion} />
		</div>
	);
};

export default Quiz;
