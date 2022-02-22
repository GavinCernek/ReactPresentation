import React from 'react';

const CompletedTodo = ({ title }) => {
	return (
		<li className="todo-completed__item">
			<div className="todo-completed__item-wrapper">
				<h2 className="todo-completed__item-title">{title}</h2>
				<p className="todo-completed__item-status">Completed</p>
			</div>
		</li>
	);
};

export default CompletedTodo;
