import React from 'react';
import Page from '../src/hocs/Page';
import BigTitle from '../src/components/BigTitle';
import Paragraph from '../src/components/Paragraph';
import MobilePicture from '../src/components/MobilePicture';
import { getText } from '../src/texts/getText';

const pageName = 'ueber-mich';
const AboutMePage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/images/portraits/mobile/michaela-portrait.jpg"
			alt="Portrait von Michaela Jaritz"
		/>
		<BigTitle timeout={1200} color="purple">
			{getText(`pages.${pageName}.content.titleExperience`)}
		</BigTitle>
		<Paragraph timeout={1400}>
			{getText(`pages.${pageName}.content.textExperience`)}
		</Paragraph>
		<MobilePicture
			src="/images/artworks/mobile/bilingual.jpg"
			alt="Sprachverliebt"
		/>
		<BigTitle timeout={1500} color="blue">
			{getText(`pages.${pageName}.content.titleLanguages`)}
		</BigTitle>
		<Paragraph timeout={1600}>
			{getText(`pages.${pageName}.content.textLanguages`)}
		</Paragraph>
		<MobilePicture
			src="/images/artworks/mobile/girl-pearl.jpg"
			alt="Menschlich"
		/>
		<BigTitle timeout={1700} color="orange">
			{getText(`pages.${pageName}.content.titleHuman`)}
		</BigTitle>
		<Paragraph timeout={1800}>
			{getText(`pages.${pageName}.content.textHuman`)}
		</Paragraph>
	</Page>
);

export default AboutMePage;

