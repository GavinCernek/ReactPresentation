import React, { useState, useEffect } from 'react';
import TodoImportanceDropdown from './TodoImportanceDropdown';

const TodoItem = ({ id, title, importance, updateTodos, completeTodo, removeTodo }) => {
	const [todoImportance, setTodoImportance] = useState(importance);

	const changeImportance = (importance) => {
		setTodoImportance(importance);
	};

	useEffect(() => {
		updateTodos({ id: id, title: title, importance: todoImportance });
	}, [todoImportance]);

	return (
		<li className="todo-item">
			<div className="todo-item__wrapper">
				<h2 className="todo-item__title">{title}</h2>

				<TodoImportanceDropdown importance={todoImportance} changeImportance={changeImportance} />

				<div className="todo-item__actions">
					<button
						type="button"
						className="todo-item__completed"
						onClick={() => completeTodo({ id: id, title: title, importance: todoImportance })}
					>
						Completed
					</button>
					<button type="button" className="todo-item__remove" onClick={() => removeTodo(id)}>
						Remove
					</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
