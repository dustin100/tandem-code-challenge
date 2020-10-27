import React, { Fragment, useState } from 'react';
import questions from '../../data/questions.json';
import Button from './Button';
import Quiz from '../Quiz';

const Landing = () => {
	const [tenQuestions, setTenQuestions] = useState(null);
	const [switchView, setSwitchView] = useState(false);

	const getTenQuestion = () => {
		// grab 10 questions from the the json file
		const tenQ = shuffle(questions, 10);

		// reformat the question objects in an easier to use format while also shuffling the answer key
		const reformatQuestions = tenQ.map((q) => {
			return {
				question: q.question,
				answers: shuffle([...q.incorrect, q.correct], 4),
				correct: q.correct,
			};
		});

		setTenQuestions(reformatQuestions);
		setSwitchView(true);
	};

	// shuffle helper function
	const shuffle = (arr, ln) => {
		const results = arr.sort(() => {
			return 0.5 - Math.random();
		});
		return results.slice(arr, ln);
	};
	

	if (switchView) return <Quiz data={tenQuestions} />;

	return (
		<Fragment>
			<h2>To get started click button below</h2>
			<Button text='Get Started' fn={getTenQuestion} />
		</Fragment>
	);
};

export default Landing;
