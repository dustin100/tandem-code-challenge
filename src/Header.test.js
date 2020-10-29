import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from './test/testUtils';
import Header from './components/layout/Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

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


