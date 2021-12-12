import React from 'react';
// import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	return (
		<div className='container'>
			<Header />
			{/* <Counter /> */}
			<Tasks />
			<Footer />
		</div>
	);
};

export default App;
