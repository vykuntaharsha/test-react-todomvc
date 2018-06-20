import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { todoFilters } from '../constants';
import FilterItem from '../components/FilterItem';
import { setVisibilityFilter } from '../actions';

const FilterList = ({
	activeFilter,
	activeTodosCount,
	completedTodosCount,
	setFilter
}) => {
	const getFilter = filter => {
		switch (filter) {
			case 'ALL':
				return (
					<Fragment>
						<p>All</p>
						<strong>
							{activeTodosCount + completedTodosCount}
						</strong>
					</Fragment>
				);

			case 'ACTIVE':
				return (
					<Fragment>
						<p>Active</p> <strong>{activeTodosCount}</strong>
					</Fragment>
				);

			case 'COMPLETED':
				return (
					<Fragment>
						<p>Completed</p> <strong>{completedTodosCount}</strong>
					</Fragment>
				);

			default:
				return null;
		}
	};

	return (
		<ul className="todo-filters">
			{Object.keys(todoFilters).map(filter => (
				<FilterItem
					key={filter}
					active={activeFilter === todoFilters[filter]}
					onClick={() => setFilter(todoFilters[filter])}
				>
					{getFilter(filter)}
				</FilterItem>
			))}
		</ul>
	);
};

const mapStateToProps = state => {
	const activeTodosCount = state.todos.reduce(
		(activeCount, todo) =>
			!todo.completed ? activeCount + 1 : activeCount,
		0
	);

	const completedTodosCount = state.todos.length - activeTodosCount;

	return {
		activeFilter: state.visibilityFilter,
		activeTodosCount,
		completedTodosCount
	};
};

const mapDispatchToProps = dispatch => ({
	setFilter: filter => {
		dispatch(setVisibilityFilter(filter));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterList);
