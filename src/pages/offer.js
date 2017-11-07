import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import { getPageContentsByKeys } from '../texts/utils';
import page from '../hocs/page';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import Accordion from '../components/Accordion';

const OfferPage = ({ intl, pageName }) => {
	const messages = defineMessages(getPageContentsByKeys(pageName, [
		'symbolonTitle',
		'symbolonProfilTitle',
		'symbolonProfilIntensiveTitle',
		'systemicTitle',
		'businessCoachingTitle',
		'symbolonTeamTitle',
		'art4reflectionTitle',
	]));
	return (
		<div>
			<Subtitle timeout={1000}>
				<FormattedHTMLMessage id={`pages.${pageName}.content.subtitle`} />
			</Subtitle>
			<BigTitle timeout={1200} color="orange">
				<FormattedHTMLMessage id={`pages.${pageName}.content.titlePersonalOffer`} />
			</BigTitle>
			<Paragraph timeout={1300}>
				<FormattedHTMLMessage id={`pages.${pageName}.content.textPersonalOffer`} />
			</Paragraph>
			<Accordion
				startTimeout={1400}
				color="orange"
				items={[
					{
						title: intl.formatMessage(messages.symbolonTitle),
						content: <FormattedHTMLMessage id={`pages.${pageName}.content.symbolonText`} />,
					},
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
			<BigTitle timeout={1800} color="blue">
				<FormattedHTMLMessage id={`pages.${pageName}.content.titleTeamOffer`} />
			</BigTitle>
			<Paragraph timeout={1900}>
				<FormattedHTMLMessage id={`pages.${pageName}.content.textTeamOffer`} />
			</Paragraph>
			<Accordion
				startTimeout={2000}
				color="blue"
				items={[
					{
						title: intl.formatMessage(messages.systemicTitle),
						content: <FormattedHTMLMessage id={`pages.${pageName}.content.systemicText`} />,
					},
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
		</div>
	);
};

OfferPage.propTypes = {
	pageName: PropTypes.string.isRequired,
	intl: intlShape.isRequired,
};

export default page('offer')(injectIntl(OfferPage));

