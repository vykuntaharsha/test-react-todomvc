import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleInput(event) {
		this.setState({ text: event.target.value });
	}

	handleAddTodo() {
		if (this.state.text.trim()) {
			this.props.addTodo(this.state.text.trim());
			this.setState({ text: '' });
		}
	}

	render() {
		return (
			<div className="input-section">
				<input
					className="todo-input"
					type="text"
					placeholder="New"
					autoFocus
					value={this.state.text}
					onChange={this.handleInput}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							this.handleAddTodo();
						}
					}}
				/>
				<button className="add-btn" onClick={this.handleAddTodo}>
					+
				</button>
			</div>
		);
	}
}

export default connect(
	null,
	{ addTodo }
)(AddTodo);
