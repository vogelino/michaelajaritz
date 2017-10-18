import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import page from '../hocs/page';
import Paragraph from '../components/Paragraph';

const ImprintPage = ({ pageName }) => (
	<div>
		<Paragraph timeout={1200}>
			<FormattedHTMLMessage id={`pages.${pageName}.content.contactInformations`} />
		</Paragraph>
	</div>
);

ImprintPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('imprint')(ImprintPage);

