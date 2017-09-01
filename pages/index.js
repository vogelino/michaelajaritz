import React from 'react';
import { FormattedMessage } from 'react-intl';
import TextsProvider from '../texts';
import HtmlHead from '../components/HtmlHead';

export default () => (
	<TextsProvider>
		<div>
			<HtmlHead pageName="welcome" />
			<FormattedMessage id="pages.welcome.greetings" />
		</div>
	</TextsProvider>
);
