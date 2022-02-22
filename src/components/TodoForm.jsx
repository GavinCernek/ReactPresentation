import React, { useState } from 'react';
import { useTodoId } from '../hooks/useTodoId';
import TodoImportanceDropdown from './TodoImportanceDropdown';

const TodoForm = ({ addTodo }) => {
	const [todoTitle, setTodoTitle] = useState('');
	const [todoImportance, setTodoImportance] = useState('Not Important');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!todoTitle) {
			console.warn('Missing required values');
			return;
		}

		const newTodo = {
			id: useTodoId(),
			title: todoTitle,
			importance: todoImportance,
		};

		addTodo(newTodo);
		setTodoTitle('');
	};

	const changeImportance = (importance) => {
		setTodoImportance(importance);
	};

	return (
		<div className="todo-form">
			<h2 className="todo-form__title">Add a Todo</h2>

			<form className="todo-form__form" onSubmit={handleSubmit}>
				<div className="todo-form__content">
					<label htmlFor="todo-title" className="todo-form__label">
						<input
							type="text"
							id="todo-title"
							className="todo-form__input"
							value={todoTitle}
							onChange={(e) => setTodoTitle(e.target.value)}
						/>
					</label>
					<TodoImportanceDropdown importance={todoImportance} changeImportance={changeImportance} />
				</div>
				<button type="submit" className="todo-form__submit">
					Add todo
				</button>
			</form>
		</div>
	);
};

export default TodoForm;
