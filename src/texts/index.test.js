/* global expect test */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { mount } from 'enzyme';
import TextsProvider from '.';

test('Should provide context to its direct children', () => {
	const MyComponent = () => (
		<TextsProvider>
			<div className="me">
				<FormattedMessage id="testString" />
			</div>
		</TextsProvider>
	);
	const wrapper = mount(<MyComponent />);
	expect(wrapper.find('.me').text()).toBe('hello');
});

test('Should provide context to its nested children', () => {
	const MySubComponent = () => (
		<div className="me"><FormattedMessage id="testString" /></div>
	);
	const MyComponent = () => (
		<TextsProvider><div><MySubComponent /></div></TextsProvider>
	);
	const wrapper = mount(<MyComponent />);
	expect(wrapper.find('.me').text()).toBe('hello');
});
