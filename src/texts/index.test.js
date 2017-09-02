/* global expect test */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { mount } from 'enzyme';
import TextsProvider from '.';

test('Should provide context to its nested ancestors', () => {
	const MySubComponent = () => (
		<div className="two">
			<FormattedMessage id="testString" />
		</div>
	);
	const MyComponent = () => (
		<TextsProvider>
			<div>
				<span className="one">
					<FormattedMessage id="testString" />
				</span>
				<MySubComponent />
			</div>
		</TextsProvider>
	);
	const wrapper = mount(<MyComponent />);
	expect(wrapper.find('.one').text()).toBe('hello');
	expect(wrapper.find('.two').text()).toBe('hello');
});
