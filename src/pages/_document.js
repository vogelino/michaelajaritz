import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		/* eslint-disable react/no-danger */
		return (
			<html lang="de">
				<Head>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
					<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|PT+Mono" rel="stylesheet" />
				</body>
			</html>
		);
	}
}

