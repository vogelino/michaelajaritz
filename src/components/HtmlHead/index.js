import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';

export const HtmlHeadComponent = ({ pageName, intl, children }) => (
	<Head>
		<title>
			{intl.formatMessage({ id: `pages.${pageName}.title` })}
			{intl.formatMessage({ id: 'site.title' })}
		</title>
		{/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
		<meta name="description" content={intl.formatMessage({ id: 'site.description' })} />
		<meta name="revisit-after" content="30 days" />
		<meta name="distribution" content="web" />
		<meta name="robots" content="index, follow" />
		<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

		<link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png?v=RyMgLlLMO9" />
		<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png?v=RyMgLlLMO9" />
		<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png?v=RyMgLlLMO9" />
		<link rel="manifest" href="/static/favicons/site.webmanifest?v=RyMgLlLMO9" />
		<link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg?v=RyMgLlLMO9" color="#5bbad5" />
		<link rel="shortcut icon" type="image/x-icon" href="/static/favicons/favicon.ico?v=RyMgLlLMO9" />
		<meta name="apple-mobile-web-app-title" content="Michaela Jaritz" />
		<meta name="application-name" content="Michaela Jaritz" />
		<meta name="msapplication-TileColor" content="#ff0000" />
		<meta name="msapplication-TileImage" content="/static/favicons/mstile-144x144.png?v=RyMgLlLMO9" />
		<meta name="msapplication-config" content="/static/favicons/browserconfig.xml?v=RyMgLlLMO9" />
		<meta name="theme-color" content="#ffffff" />
		{children}
	</Head>
);

HtmlHeadComponent.defaultProps = {
	chilren: null,
};

HtmlHeadComponent.propTypes = {
	pageName: PropTypes.string.isRequired,
	intl: intlShape.isRequired,
	children: PropTypes.any,
};

export default injectIntl(HtmlHeadComponent);
