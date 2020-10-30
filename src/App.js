import './App.css';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';

const App = () => {
	return (
		<div className='App'>
			<Header title = 'Dustin Kelly Tandem Code Challenge' />
			
				<Landing />
			
		</div>
	);
};

export default App;
