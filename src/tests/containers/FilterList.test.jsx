import React from 'react';
import FilterList from '../../containers/FilterList';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { todoFilters, actionTypes } from '../../constants';
import FilterItem from '../../components/FilterItem';

const setup = () => {
	const store = configureStore()({
		todos: [
			{
				text: 'pick up groceries',
				completed: false,
				id: 0
			},
			{
				text: 'send an email',
				completed: true,
				id: 1
			}
		]
	});
	const wrapper = shallow(<FilterList store={store} />);

	return {
		store,
		wrapper
	};
};

describe('containers', () => {
	describe('FilterList', () => {
		it('should render', () => {
			const { wrapper } = setup();
			expect(wrapper).toMatchSnapshot();
		});

		it('should dispatch setFilter when clicked', () => {
			const { store, wrapper } = setup();

			const activeFilter = wrapper
				.shallow()
				.find(FilterItem)
				.at(1);
			activeFilter.simulate('click');

			expect(store.getActions()).toEqual([
				{
					type: actionTypes.SET_VISIBILITY_FILTER,
					filter: todoFilters.ACTIVE
				}
			]);
		});
	});
});
