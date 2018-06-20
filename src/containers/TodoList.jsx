import React from 'react';
import TodoItem from '../components/TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoFilters } from '../constants';
import { completeTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, actions }) => {
	return (
		<ul className="todo-list">
			<li className="todo-info">
				<p>Todo</p>
				<p>Complete</p>
				<p>Delete</p>
			</li>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					completeTodo={actions.completeTodo}
					deleteTodo={actions.deleteTodo}
				/>
			))}
		</ul>
	);
};

const mapStateToProps = state => {
	switch (state.visibilityFilter) {
		case todoFilters.ACTIVE:
			return { todos: state.todos.filter(todo => !todo.completed) };
		case todoFilters.COMPLETED:
			return { todos: state.todos.filter(todo => todo.completed) };
		default:
			return { todos: state.todos };
	}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ completeTodo, deleteTodo }, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
