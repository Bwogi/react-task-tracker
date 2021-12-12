import { useState } from 'react';
// import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
// import Task from './components/Task';
import Tasks from './components/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2:30pm.',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30pm.',
			reminder: true,
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 5th at 2:30pm.',
			reminder: false,
		},
		{
			id: 4,
			text: 'Code application',
			day: 'Feb 7th at 2:30pm.',
			reminder: false,
		},
	]);

	// delete tasks
	const deleteTask = (id) => {
		// console.log('delete', id);
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// toggle reminder
	const toggleReminder = (id) => {
		// console.log(id);
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className='container'>
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No Tasks to show!'
			)}
			<Footer />
		</div>
	);
};

export default App;
