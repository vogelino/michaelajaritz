import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Page from '../hocs/Page';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';

const pageName = 'kooperationen';
const CooperationsPage = () => (
	<Page pageName={pageName}>
		<BigTitle timeout={1100}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.title`} />
		</BigTitle>
		<Paragraph timeout={1200}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.text`} />
		</Paragraph>
		<Paragraph timeout={1300}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.list`} />
		</Paragraph>
		<Paragraph timeout={1400}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.thanks`} />
		</Paragraph>
	</Page>
);

export default CooperationsPage;

