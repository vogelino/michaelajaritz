import React from 'react';
import { FormattedHTMLMessage, defineMessages, intlShape } from 'react-intl';
import Page from '../hocs/Page';
import { getPageContentsByKeys } from '../texts/utils';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import Accordion from '../components/Accordion';
import MobilePicture from '../components/MobilePicture';

const pageName = 'angebot';

const Accordion1 = (_, { intl }) => {
	const messages = defineMessages(getPageContentsByKeys(pageName, [
		'symbolonProfilTitle',
		'symbolonProfilIntensiveTitle',
	]));
	return (
		<Accordion
			startTimeout={1600}
			color="orange"
			items={[
				{
					title: intl.formatMessage(messages.symbolonProfilTitle),
					content: <FormattedHTMLMessage id={`pages.${pageName}.content.symbolonProfilText`} />,
				},
				{
					title: intl.formatMessage(messages.symbolonProfilIntensiveTitle),
					content: <FormattedHTMLMessage id={`pages.${pageName}.content.symbolonProfilIntensiveText`} />,
				},
			]}
		/>
	);
};

Accordion1.contextTypes = {
	intl: intlShape.isRequired,
};

const Accordion2 = (_, { intl }) => {
	const messages = defineMessages(getPageContentsByKeys(pageName, [
		'businessCoachingTitle',
		'symbolonTeamTitle',
		'art4reflectionTitle',
	]));
	return (
		<Accordion
			startTimeout={2100}
			color="blue"
			items={[
				{
					title: intl.formatMessage(messages.businessCoachingTitle),
					content: <FormattedHTMLMessage id={`pages.${pageName}.content.businessCoachingText`} />,
				},
				{
					title: intl.formatMessage(messages.symbolonTeamTitle),
					content: <FormattedHTMLMessage id={`pages.${pageName}.content.symbolonTeamText`} />,
				},
				{
					title: intl.formatMessage(messages.art4reflectionTitle),
					content: <FormattedHTMLMessage id={`pages.${pageName}.content.art4reflectionText`} />,
				},
			]}
		/>
	);
};

Accordion2.contextTypes = {
	intl: intlShape.isRequired,
};

const OfferPage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/static/images/artworks/atelier.jpg"
			alt="Persönliche Angebot"
		/>
		<Subtitle timeout={1000}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.subtitle`} />
		</Subtitle>
		<BigTitle timeout={1200} color="orange">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titlePersonalOffer`} />
		</BigTitle>
		<Paragraph timeout={1300}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textPersonalOffer`} />
		</Paragraph>
		<Accordion1 />
		<MobilePicture
			src="/static/images/artworks/renoir.jpg"
			alt="Team Angebot"
		/>
		<BigTitle timeout={1800} color="blue">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleTeamOffer`} />
		</BigTitle>
		<Paragraph timeout={1900}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textTeamOffer`} />
		</Paragraph>
		<Accordion2 />
	</Page>
);

export default OfferPage;

