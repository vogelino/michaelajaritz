import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import page from '../hocs/page';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';

const FocusPage = ({ pageName }) => (
	<div>
		<Subtitle timeout={1000} marginBottom={80}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.subtitle`} />
		</Subtitle>
		<BigTitle timeout={1200} color="blue">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleArt`} />
		</BigTitle>
		<Paragraph timeout={1400}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textArt`} />
		</Paragraph>
		<BigTitle timeout={1500} color="orange">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleHuman`} />
		</BigTitle>
		<Paragraph timeout={1600}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textHuman`} />
		</Paragraph>
		<BigTitle timeout={1700} color="purple">
			<FormattedHTMLMessage id={`pages.${pageName}.content.titleMethod`} />
		</BigTitle>
		<Paragraph timeout={1800}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.textMethod`} />
		</Paragraph>
	</div>
);

FocusPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('fokus')(FocusPage);
