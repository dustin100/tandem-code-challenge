# Dustin Kelly's Tandem Code Challenge

Live Link: [Tandem-code-challenge](https://dustin100.github.io/tandem-code-challenge/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- Tried adding tests to a project for the first time
- Learned the importance of TDD
- Was able to test if components rendered 

### Test Improvements 
- Add PropTypes and test those
- Test onClick functionality
- Test helper functions
- Read more about all the testing methods available   

### App Improvements 

- Pull in more questions from an API
- Find a better way to restart Quiz
- Break out Quiz.js into smaller components  

### Goal

Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.

Use creative license in terms of how you want us to see this game. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.
We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

### Assumptions

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Acceptance Criteria

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round


