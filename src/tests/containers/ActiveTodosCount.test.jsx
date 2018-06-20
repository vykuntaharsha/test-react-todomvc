import React from 'react';
import { shallow } from 'enzyme';
import ActiveTodosCount from '../../containers/ActiveTodosCount';
import configureStore from 'redux-mock-store';

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
	const wrapper = shallow(<ActiveTodosCount store={store} />);

	return {
		store,
		wrapper
	};
};

describe('containers', () => {
	describe('ActiveTodosCount', () => {
		it('should render', () => {
			const { wrapper } = setup();
			expect(wrapper).toMatchSnapshot();
		});
	});
});
