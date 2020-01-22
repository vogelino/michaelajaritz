import React from 'react';
import { intlShape } from 'react-intl';
import MarkdownSuite from '../src/components/MarkdownSuite';
import MobilePicture from '../src/components/MobilePicture';
import Page from '../src/hocs/Page';

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
		<MobilePicture
			src="/static/images/artworks/mobile/paulklee.jpg"
			alt="Impressum"
		/>
		<Content />
	</Page>
);

export default ImpressumPage;
