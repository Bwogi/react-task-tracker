import { FcOk } from 'react-icons/fc';
import { BiX } from 'react-icons/bi';
import Task from '../Task';

const Tasks = ({ tasks, onDelete }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} />
			))}
		</>
	);
};

export default Tasks;
