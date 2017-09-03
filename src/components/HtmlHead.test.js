import React from 'react';
import { shallow } from 'enzyme';
import IntlHead, { HtmlHead } from './HtmlHead';
import TextsProvider from '../texts';

test('It should render without crashing without', () => {
	shallow(
		<HtmlHead
			pageName="welcome"
			intl={{ formatMessage: () => 'welcome' }}
		/>
	);
});

test('It should render without crashing with provider', () => {
	const Component = () => (
		<TextsProvider>
			<div><IntlHead /></div>
		</TextsProvider>
	);
	shallow(<Component />);
});

