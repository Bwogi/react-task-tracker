import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>No of Guests: {count}</h2>
			<button onClick={() => setCount(count + 1)} className='btn'>
				Add Guests (+)
			</button>
			<button
				onClick={() => {
					if (count > 0) setCount(count - 1);
				}}
				className='btn'>
				Remove Guests (-)
			</button>
		</div>
	);
};

export default Counter;
