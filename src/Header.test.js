import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import Header from './components/layout/Header';

/**
 * Factory function to create a ShallowWrapper for the Header component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	return shallow(<Header {...props} />);
};

test('renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-header');
	expect(component.length).toBe(1);
});
