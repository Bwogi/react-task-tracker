import { BiX } from 'react-icons/bi';
import { FcOk } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
	return (
		<div className='task'>
			<h3>
				{task.text}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
