import React from 'react';
import { intlShape } from 'react-intl';
import MarkdownSuite from '../components/MarkdownSuite';
import Page from '../hocs/Page';

const pageName = 'impressum';
const Content = (props, { intl: { formatMessage } }) => (
	<MarkdownSuite
		timeout={1200}
		source={formatMessage({ id: `pages.${pageName}.text` })}
	/>
);

Content.contextTypes = { intl: intlShape };

const ImpressumPage = () => (
	<Page pageName={pageName}>
		<Content />
	</Page>
);

export default ImpressumPage;
