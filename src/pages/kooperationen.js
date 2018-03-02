import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import page from '../hocs/page';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';

const CooperationsPage = ({ pageName }) => (
	<div>
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
	</div>
);

CooperationsPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('kooperationen')(CooperationsPage);

