import './App.css';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<div className='wrapper'>
				<Landing />
			</div>
		</div>
	);
};

export default App;
