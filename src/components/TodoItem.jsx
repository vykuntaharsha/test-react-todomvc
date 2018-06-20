import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		this.setState({ hover: true });
	}

	handleMouseLeave() {
		this.setState({ hover: false });
	}

	render() {
		const { todo, completeTodo, deleteTodo } = this.props;
		const { hover } = this.state;
		return (
			<li
				className={
					'todo-item ' +
					(todo.completed ? 'completed ' : '') +
					(hover ? 'destroy ' : '')
				}
			>
				<p>{todo.text}</p>
				<input
					className="complete-btn"
					type="checkbox"
					disabled={todo.completed}
					checked={todo.completed}
					onChange={() => completeTodo(todo.id)}
				/>
				<button
					className="delete-btn"
					onClick={() => deleteTodo(todo.id)}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
				>
					x
				</button>
			</li>
		);
	}
}

export default TodoItem;
