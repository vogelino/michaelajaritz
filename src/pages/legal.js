import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import page from '../hocs/page';
import Paragraph from '../components/Paragraph';

const ImprintPage = () => (
	<div>
		<Paragraph timeout={1200}>
			<FormattedHTMLMessage id="pages.legal.text" />
		</Paragraph>
	</div>
);

ImprintPage.propTypes = {};

export default page('legal')(ImprintPage);

