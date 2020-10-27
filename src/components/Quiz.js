import { useState } from 'react';
import Button from '../components/layout/Button';
import Scoreboard from '../components/Scoreboard';

const Quiz = ({ data }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const nextQuestion = (e) => {
		const correctAnswer = data[currentQuestion].correct;
		const userAnswer = e.target.textContent;
		if (correctAnswer === userAnswer) {
			const currentScore = score + 1;
			setScore(currentScore);
		}
		const next = currentQuestion + 1;
		setCurrentQuestion(next);
	};

	if (currentQuestion > data.length - 1) return <Scoreboard score={score} />;

	// map though the answer key
	const answersKey = data[currentQuestion].answers.map((item, index) => {
		return <Button key={index} text={item} fn={(e) => nextQuestion(e)} />;
	});

	return (
		<div>
			<p>{data[currentQuestion].question}</p>
			{answersKey}
		</div>
	);
};

export default Quiz;
