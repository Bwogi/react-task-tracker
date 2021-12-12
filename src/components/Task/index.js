// import { BiX } from 'react-icons/bi';
import { FcOk } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text}
				{!task.reminder ? (
					<FaTimes
						style={{ color: 'red', cursor: 'pointer' }}
						onClick={() => onDelete(task.id)}
					/>
				) : (
					<FcOk />
				)}
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
