import React from 'react';
import TextsProvider from '../texts';
import HtmlHead from '../components/HtmlHead';
import { FormattedMessage } from 'react-intl';

export default () => (
	<TextsProvider>
		<div>
			<HtmlHead pageName="welcome" />
			<FormattedMessage id="pages.welcome.greetings" />
		</div>
	</TextsProvider>
);
