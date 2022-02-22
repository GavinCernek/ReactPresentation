import React from 'react';
import TodoList from './TodoList';

const todos = [
	{ id: 'sadf53yeth45w3dfhsdh34', title: 'Walk the Dog', importance: 'Important' },
	{ id: 'fdggjhgk346rjfdfgj354d', title: 'Go to the Grocery Store', importance: 'Not Important' },
	{ id: 'dfjyjukuykuyk675tydj45', title: 'Clean Room', importance: 'Not Important' },
	{ id: 'rthgjgkhdfxzg3443trhj5', title: 'Fix the Garage Door', importance: 'Important' },
];

const Todos = () => {
	return (
		<div className="todo">
			<h1 className="todo__title">Todo Planner</h1>
			<TodoList todos={todos} />
		</div>
	);
};

export default Todos;
