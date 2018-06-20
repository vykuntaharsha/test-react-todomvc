import React from 'react';
import AddTodo from '../../containers/AddTodo';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { actionTypes } from '../../constants';

const setup = () => {
	const store = configureStore()({ todos: [] });
	const wrapper = shallow(<AddTodo store={store} />);

	return {
		store,
		wrapper
	};
};

describe('containers', () => {
	describe('AddTodo', () => {
		it('should render', () => {
			const { wrapper } = setup();
			expect(wrapper).toMatchSnapshot();
		});

		it('addButton should dispatch addTodo onClicked', () => {
			const { store, wrapper } = setup();
			const deepWrapper = wrapper.shallow();

			deepWrapper
				.find('input')
				.simulate('change', { target: { value: 'pick up groceries' } });

			deepWrapper.find('button').simulate('click');
			expect(store.getActions()).toEqual([
				{ text: 'pick up groceries', type: actionTypes.ADD_TODO }
			]);
		});

		it('on enter input should dispatch addTodo', () => {
			const { store, wrapper } = setup();
			const input = wrapper.shallow().find('input');

			input.simulate('change', {
				target: { value: 'pick up groceries' }
			});
			input.simulate('keyDown', { key: 'Enter' });

			expect(store.getActions()).toEqual([
				{ text: 'pick up groceries', type: actionTypes.ADD_TODO }
			]);
		});
	});
});
