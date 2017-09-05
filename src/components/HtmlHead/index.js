import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';

export const HtmlHeadComponent = ({ pageName, intl }) => (
	<Head>
		<title>
			{intl.formatMessage({ id: `pages.${pageName}.title` })}
			{intl.formatMessage({ id: 'site.title' })}
		</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	</Head>
);

HtmlHeadComponent.propTypes = {
	pageName: PropTypes.string.isRequired,
	intl: intlShape.isRequired,
};

export default injectIntl(HtmlHeadComponent);