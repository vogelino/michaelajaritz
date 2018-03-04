import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Page from '../hocs/Page';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import MobilePicture from '../components/MobilePicture';

const pageName = 'fokus';
const FocusPage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/static/images/artworks/gallery.jpg"
			alt="Die Kunst"
		/>
		<Subtitle timeout={1000}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.subtitle`} />
		</Subtitle>
		<BigTitle timeout={1200} color="blue">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleArt`} />
		</BigTitle>
		<Paragraph timeout={1400}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textArt`} />
		</Paragraph>
		<MobilePicture
			src="/static/images/artworks/monalisa.jpg"
			alt="Der Mensch"
		/>
		<BigTitle timeout={1500} color="orange">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleHuman`} />
		</BigTitle>
		<Paragraph timeout={1600}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textHuman`} />
		</Paragraph>
		<MobilePicture
			src="/static/images/artworks/soapbubbles.jpg"
			alt="Die Methode"
		/>
		<BigTitle timeout={1700} color="purple">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleMethod`} />
		</BigTitle>
		<Paragraph timeout={1800}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textMethod`} />
		</Paragraph>
	</Page>
);

export default FocusPage;
