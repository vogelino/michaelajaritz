import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import page from '../hocs/page';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';

const AboutMePage = ({ pageName }) => (
	<div>
		<BigTitle timeout={1200} color="orange">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleExperience`} />
		</BigTitle>
		<Paragraph timeout={1400}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textExperience`} />
		</Paragraph>
		<BigTitle timeout={1500} color="purple">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleLanguages`} />
		</BigTitle>
		<Paragraph timeout={1600}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textLanguages`} />
		</Paragraph>
		<BigTitle timeout={1700} color="blue">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleHuman`} />
		</BigTitle>
		<Paragraph timeout={1800}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textHuman`} />
		</Paragraph>
	</div>
);

AboutMePage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('aboutme')(AboutMePage);

