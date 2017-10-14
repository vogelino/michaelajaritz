import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { flush } from 'emotion';
import TextsProvider from '../texts';
import HtmlHead from '../components/HtmlHead';
import pages from '../constants/pages';

const dev = process.env.NODE_ENV !== 'production';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		if (dev) {
			flush();
		}
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

		const pagePath = __NEXT_DATA__.pathname;
		const page = pages.find(({ path }) => path === pagePath) || pages[0];
		this.state = {
			pageName: page.name,
		};
	}

	render() {
		/* eslint-disable react/no-danger */
		return (
			<html lang="de">
				<Head>
					<TextsProvider>
						<HtmlHead pageName={this.state.pageName} />
					</TextsProvider>
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

