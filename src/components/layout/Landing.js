import React, { useState } from 'react';
import questions from '../../data/questions.json';
import { getRandom } from '../helpers';
import Button from './Button';
import Quiz from '../Quiz';

const Landing = () => {
	const [tenQuestions, setTenQuestions] = useState(null);
	const [switchView, setSwitchView] = useState(false);
	const initialData = [...questions];

	const getTenQuestion = () => {
		// grab 10 questions from the the json file
		const tenQ = getRandom(initialData, 10);

		// reformat the question objects in an easier to use format while also shuffling the answer key
		const reformatQuestions = tenQ.map((q) => {
			return {
				question: q.question,
				choices: getRandom([...q.incorrect, q.correct], 4),
				correct: q.correct,
			};
		});

		setTenQuestions(reformatQuestions);
		setSwitchView(true);
	};

	if (switchView)
		return <Quiz getTenQuestion={getTenQuestion} data={tenQuestions} />;

	return (
		<section className='wrapper' data-test='component-landing'>
			<h2>To get started click button below</h2>
			<Button text='Get Started' fn={getTenQuestion} />
		</section>
	);
};

export default Landing;
