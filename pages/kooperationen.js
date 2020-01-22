import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Page from '../src/hocs/Page';
import BigTitle from '../src/components/BigTitle';
import Paragraph from '../src/components/Paragraph';
import MobilePicture from '../src/components/MobilePicture';

const pageName = 'kooperationen';
const CooperationsPage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/static/images/artworks/mobile/TheRehearsalOfTheBalletOnstage.jpg"
			alt="Kooperationen"
		/>
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
		<br/>
		<br/>
		<br/>
		<a
			href="http://a-u-m.biz/"
			target="_blank"
			rel="noopener noreferrer"
			title="A+M | Marketing, Consulting, Training, Coaching"
		>
			<MobilePicture
				src="/static/logos/aundm.jpg"
				alt="Kooperationen"
			/>
		</a>
		<a
			href="https://www.symbolon.com/"
			target="_blank"
			rel="noopener noreferrer"
			title="Symbolon AG"
		>
			<MobilePicture
				src="/static/logos/symbolon.jpg"
				alt="Kooperationen"
			/>
		</a>
		<a
			href="http://www.methodenberatung-jahn.de/"
			target="_blank"
			rel="noopener noreferrer"
			title="Judith Jahn | Marktforschung, Methodenberatung und Evaluation"
		>
			<MobilePicture
				src="/static/logos/judith-jahn.jpg"
				alt="Kooperationen"
			/>
		</a>
	</Page>
);

export default CooperationsPage;

