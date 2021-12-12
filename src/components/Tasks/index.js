import { useState } from 'react';
import { FcOk } from 'react-icons/fc';
import { BiX } from 'react-icons/bi';

const Tasks = () => {
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

	return (
		<>
			{tasks.map((task) => (
				<>
					<h3 key={task.id}>{task.text}</h3>
					<p>{task.day}</p>
					<p>Reminder set? :{task.reminder ? <FcOk /> : <BiX />}</p>
				</>
			))}
		</>
	);
};

export default Tasks;
