import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const page = renderPage();
		const styles = extractCritical(page.html);
		return { ...page, ...styles };
	}

	constructor(props) {
		super(props);

		const { __NEXT_DATA__, ids } = props;
		if (ids) {
			__NEXT_DATA__.ids = ids;
		}
	}

	render() {
		/* eslint-disable react/no-danger */
		return (
			<html lang="de">
				<Head>
					<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|PT+Mono" rel="stylesheet" />
					<style id="emotion-critical" dangerouslySetInnerHTML={{ __html: this.props.css }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

