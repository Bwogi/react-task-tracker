import { BiX } from 'react-icons/bi';
import { FcOk } from 'react-icons/fc';

const Task = ({ task }) => {
	return (
		<div className='task'>
			<h3>
				{task.text} {task.reminder ? <FcOk /> : <BiX />}
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
