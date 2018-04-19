import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Page from '../hocs/Page';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import MobilePicture from '../components/MobilePicture';

const pageName = 'willkommen';
const WelcomePage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/static/images/portraits/mobile/welcomeSecondary.jpg"
			alt="Portrait von Michaela Jaritz"
		/>
		<Subtitle timeout={1000} block >
			<FormattedMessage id={`pages.${pageName}.content.subtitle`} />
		</Subtitle>
		<BigTitle
			timeout={1200}
			color="purple"
			marginTop={10}
			marginBottom={0}
		>
			<FormattedHTMLMessage id={`pages.${pageName}.content.fresh`} />
		</BigTitle>
		<BigTitle
			timeout={1500}
			color="orange"
			marginTop={10}
			marginBottom={0}
		>
			<FormattedHTMLMessage id={`pages.${pageName}.content.individual`} />
		</BigTitle>
		<BigTitle
			timeout={1800}
			color="blue"
			marginTop={10}
		>
			<FormattedHTMLMessage id={`pages.${pageName}.content.sustainable`} />
		</BigTitle>
		<Subtitle timeout={2300} block marginTop={40}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.quote`} />
		</Subtitle>
		<Paragraph timeout={2400}>
			<FormattedMessage id={`pages.${pageName}.content.greetings`} />
		</Paragraph>
	</Page>
);

export default WelcomePage;
