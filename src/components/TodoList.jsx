import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodos, completeTodo, removeTodo }) => {
	return (
		<>
			{todos.length > 0 ? (
				<ul className="todo-list">
					{todos.reverse().map((todo) => {
						return (
							<TodoItem
								key={todo.id}
								id={todo.id}
								title={todo.title}
								importance={todo.importance}
								updateTodos={updateTodos}
								completeTodo={completeTodo}
								removeTodo={removeTodo}
							/>
						);
					})}
				</ul>
			) : (
				<p>There are currently no todos. Try making one!</p>
			)}
		</>
	);
};

export default TodoList;
