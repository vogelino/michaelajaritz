import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import page from '../hocs/page';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import SocialIconList from '../components/SocialIconList';
import { AnimatedInTextContent } from '../components/AnimatedInText';

const SocialIconListWrapper = styled('div')`
	position: relative;
	color: red;

	${AnimatedInTextContent} > * {
		position: inherit;
	}
`;

const ContactPage = ({ pageName }) => (
	<div>
		<Subtitle timeout={1000} nomargin>
			<FormattedHTMLMessage id={`pages.${pageName}.content.subtitle`} />
		</Subtitle>
		<BigTitle timeout={1100}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.title`} />
		</BigTitle>
		<Paragraph timeout={1200}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.contactInformations`} />
		</Paragraph>
		<SocialIconListWrapper>
			<SocialIconList startTimeout={1300} />
		</SocialIconListWrapper>
		<Paragraph timeout={1600}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.finalSentence`} />
		</Paragraph>
	</div>
);

ContactPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('kontakt')(ContactPage);

