import React, { useState } from 'react';
import questions from '../../data/questions.json';
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

	// my shuffle function didn't work that well and I found this one from stack overflow which did a much better job. I modified it slightly for my needs
	// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array/38571132#38571132

	const getRandom = (arr, n) => {
		let result = new Array(n),
			len = arr.length,
			taken = new Array(len);
		if (n > len) n = len;
		while (n--) {
			let x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}
		return result;
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
