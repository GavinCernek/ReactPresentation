import React from 'react';
import TodoImportanceDropdown from './TodoImportanceDropdown';

const TodoItem = ({ title, importance }) => {
	return (
		<li className="todo-item">
			<div className="todo-item__wrapper">
				<h2 className="todo-item__title">{title}</h2>

				<div className="todo-item__importance">
					<TodoImportanceDropdown importance={importance} />
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
