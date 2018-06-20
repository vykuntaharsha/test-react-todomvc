import React from 'react';
import FilterItem from '../../components/FilterItem';
import { createRenderer } from 'react-test-renderer/shallow';

const setup = props => {
	const renderer = createRenderer();
	renderer.render(<FilterItem {...props} />);
	return renderer.getRenderOutput();
};

describe('components', () => {
	describe('FilterItem', () => {
		it('should render', () => {
			const output = setup();
			expect(output.type).toBe('li');
		});

		it('should have active class', () => {
			const output = setup({ active: true });
			expect(output.props.className).toContain('active');
		});

		it('should render children', () => {
			const children = <p>All</p>;
			const output = setup({ children });
			expect(output.props.children).toEqual(children);
		});
	});
});
