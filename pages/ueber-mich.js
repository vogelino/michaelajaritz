import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Page from '../src/hocs/Page';
import BigTitle from '../src/components/BigTitle';
import Paragraph from '../src/components/Paragraph';
import MobilePicture from '../src/components/MobilePicture';

const pageName = 'ueber-mich';
const AboutMePage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/static/images/portraits/mobile/michaela-portrait.jpg"
			alt="Portrait von Michaela Jaritz"
		/>
		<BigTitle timeout={1200} color="purple">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleExperience`} />
		</BigTitle>
		<Paragraph timeout={1400}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textExperience`} />
		</Paragraph>
		<MobilePicture
			src="/static/images/artworks/mobile/bilingual.jpg"
			alt="Sprachverliebt"
		/>
		<BigTitle timeout={1500} color="blue">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleLanguages`} />
		</BigTitle>
		<Paragraph timeout={1600}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textLanguages`} />
		</Paragraph>
		<MobilePicture
			src="/static/images/artworks/mobile/girl-pearl.jpg"
			alt="Menschlich"
		/>
		<BigTitle timeout={1700} color="orange">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleHuman`} />
		</BigTitle>
		<Paragraph timeout={1800}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textHuman`} />
		</Paragraph>
	</Page>
);

export default AboutMePage;

