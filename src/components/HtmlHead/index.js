import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { getText } from '../../texts/getText'

export const HtmlHeadComponent = ({ pageName, children }) => (
	<Head>
		<title>
			{getText(`pages.${pageName}.title`)}
			{getText('site.description')}
		</title>

		<meta charSet="utf-8" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<meta name="description" content={getText('site.description')} />
		<meta name="revisit-after" content="30 days" />
		<meta name="distribution" content="web" />
		<meta name="robots" content="index, follow" />
		<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/favicons/apple-touch-icon.png?v=RyMgLlLMO9"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/favicons/favicon-32x32.png?v=RyMgLlLMO9"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/favicons/favicon-16x16.png?v=RyMgLlLMO9"
		/>
		<link rel="manifest" href="/favicons/site.webmanifest?v=RyMgLlLMO9" />
		<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=RyMgLlLMO9" color="#5bbad5" />
		<link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico?v=RyMgLlLMO9" />

		<meta name="apple-mobile-web-app-title" content="Michaela Jaritz" />
		<meta name="application-name" content="Michaela Jaritz" />
		<meta name="msapplication-TileColor" content="#ff0000" />
		<meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png?v=RyMgLlLMO9" />
		<meta name="msapplication-config" content="/favicons/browserconfig.xml?v=RyMgLlLMO9" />
		<meta name="theme-color" content="#ffffff" />

		<meta property="og:url" content="http://www.michaela-jaritz.de" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={getText(`pages.${pageName}.title`)} />
		<meta property="og:description" content={getText('site.description')} />
		<meta property="og:image" content="/images/portraits/michaela-portrait.jpg" />

		<meta name="twitter:site" content="@MichaelaJaritz" />
		<meta name="twitter:creator" content="@soyvogelino" />
		<meta name="twitter:image" content="/images/portraits/michaela-portrait.jpg" />
		<meta name="twitter:title" content={getText(`pages.${pageName}.title`)} />
		<meta name="twitter:description" content={getText('site.description')} />

		{children}
	</Head>
)

HtmlHeadComponent.defaultProps = {
	chilren: null,
}

HtmlHeadComponent.propTypes = {
	pageName: PropTypes.string.isRequired,
	children: PropTypes.any,
}

export default HtmlHeadComponent
