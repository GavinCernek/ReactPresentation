import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
	return (
		<ul className="todo-list">
			{todos.map((todo) => {
				return <TodoItem key={todo.id} title={todo.title} importance={todo.importance} />;
			})}
		</ul>
	);
};

export default TodoList;
