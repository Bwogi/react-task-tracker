import React from 'react';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Counter />
			<Footer />
		</div>
	);
};

export default App;
