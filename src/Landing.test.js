import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import Landing from './components/layout/Landing';

/**
 * Factory function to create a ShallowWrapper for the Landing component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	return shallow(<Landing {...props} />);
};

test('renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-landing');
	expect(component.length).toBe(1);
});
