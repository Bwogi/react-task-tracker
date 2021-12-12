import Button from '../Button';

const Header = ({ title }) => {
	const clickEvent = () => {
		console.log('clicked');
	};
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color='green' text='Add' onClick={clickEvent} />
		</header>
	);
};
Header.defaultProps = {
	title: 'Task Tracker',
};

export default Header;
