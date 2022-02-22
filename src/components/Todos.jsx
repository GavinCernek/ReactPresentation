import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoImportanceDropdown from './TodoImportanceDropdown';
import CompletedTodos from './CompletedTodos';

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [sortByImportance, setSortByImportance] = useState('Sort By Importance');
	const [completedTodos, setCompletedTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const updateTodos = (updatedTodo) => {
		const todoIndex = todos.findIndex((todo) => todo.id === updatedTodo.id);

		const updatedTodos = todos.filter((todo) => todo.id !== updatedTodo.id);
		updatedTodos.splice(todoIndex, 0, updatedTodo);

		setTodos(updatedTodos);
	};

	const removeTodo = (id) => {
		setTodos([...todos.filter((todo) => todo.id !== id)]);
	};

	const completeTodo = (completedTodo) => {
		setTodos([...todos.filter((todo) => todo.id !== completedTodo.id)]);
		setCompletedTodos([...completedTodos, completedTodo]);
	};

	const changeImportance = (importance) => {
		setSortByImportance(importance);
	};

	return (
		<div className="todo">
			<div className="todo__header">
				<h1 className="todo__title">Todo Planner</h1>
				<div className="todo__sort">
					<span className="todo__sort-text">Sort By:</span>
					<TodoImportanceDropdown
						isSort={true}
						importance={sortByImportance}
						changeImportance={changeImportance}
					/>
				</div>
			</div>

			<div className="todo__wrapper">
				<div className="todo__rail">
					<TodoForm addTodo={addTodo} />
				</div>
				<div className="todo__listing">
					{sortByImportance !== 'Sort By Importance' ? (
						<TodoList
							todos={todos.filter((todo) => todo.importance === sortByImportance)}
							updateTodos={updateTodos}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>
					) : (
						<TodoList
							todos={todos}
							updateTodos={updateTodos}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>
					)}
				</div>
			</div>

			{completedTodos.length > 0 ? (
				<div className="todo__footer">
					<CompletedTodos todos={completedTodos} />
				</div>
			) : null}
		</div>
	);
};

export default Todos;
