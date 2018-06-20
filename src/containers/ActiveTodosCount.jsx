import React from 'react';
import { connect } from 'react-redux';

const ActiveTodosCount = ({ count }) => {
	if (count === 1) {
		return (
			<p className="active-count">
				<strong>{count}</strong> item left
			</p>
		);
	}

	return (
		<p className="active-count">
			<strong>{count ? count : 0}</strong> items left
		</p>
	);
};

const mapStateToProps = state => {
	return {
		count: state.todos.reduce(
			(total, todo) => (todo.completed ? total : total + 1),
			0
		)
	};
};

export default connect(mapStateToProps)(ActiveTodosCount);
