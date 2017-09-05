import React from 'react';
import { shallow } from 'enzyme';
import HtmlHead, { HtmlHeadComponent } from '.';
import TextsProvider from '../../texts';

test('It should render without crashing without', () => {
	shallow(
		<HtmlHeadComponent
			pageName="welcome"
			intl={{ formatMessage: () => 'welcome' }}
		/>
	);
});

test('It should render without crashing with provider', () => {
	const Component = () => (
		<TextsProvider>
			<div><HtmlHead /></div>
		</TextsProvider>
	);
	shallow(<Component />);
});

