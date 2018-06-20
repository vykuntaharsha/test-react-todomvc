import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import FilterList from '../containers/FilterList';
import ActiveTodosCount from '../containers/ActiveTodosCount';
import '../styles/app.css';

const App = () => {
	return (
		<div className="app">
			<h1 className="app-header">To-Do</h1>
			<AddTodo />
			<ActiveTodosCount />
			<main>
				<FilterList />
				<TodoList />
			</main>
		</div>
	);
};

export default App;
