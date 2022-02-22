import React from 'react';
import CompletedTodo from './CompletedTodo';

const CompletedTodos = ({ todos }) => {
	return (
		<div className="todo-complted">
			<h2 className="todo-completed__title">Completed</h2>
			<ul className="todo-completed__list">
				{todos.map((todo) => {
					return <CompletedTodo title={todo.title} />;
				})}
			</ul>
		</div>
	);
};

export default CompletedTodos;
