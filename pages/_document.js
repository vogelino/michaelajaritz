import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />));
		const styleElement = sheet.getStyleElement();
		return { ...page, styleElement };
	}

	render() {
		/* eslint-disable react/no-danger */
		return (
			<Html lang="de">
				<Head>
					{this.props.styleElement}
					<style
						id="opacity-enforcer"
						dangerouslySetInnerHTML={{ __html: `
								* {
									opacity: 1 !important;
								}

								.parallelepiped.parallelepiped-toBottom {
									transform: none !important;
								}
								.parallelepiped.parallelepiped-toTop {
									transform: translate(0, -100%) !important;
								}
							`,
						}}
					/>
					<style
						id="transition-enforcer"
						dangerouslySetInnerHTML={{ __html: `
								* {
									transition: none !important;
								}
							`,
						}}
					/>
					<script
						async
						type="text/javascript"
						dangerouslySetInnerHTML={{ __html: `
								var opacityEnforcer = document.getElementById("opacity-enforcer");
								var transitionEnforcer = document.getElementById("transition-enforcer");
								var whiteOverlay = document.createElement('div');
								whiteOverlay.style.cssText = [
									'posistion: fixed;',
									'width: 100%;',
									'height: 100%;',
									'background: white;',
								].join(' ');
								opacityEnforcer.parentNode.appendChild(whiteOverlay);
								opacityEnforcer.parentNode.removeChild(opacityEnforcer);
								setTimeout(function() {
									transitionEnforcer.parentNode.removeChild(transitionEnforcer);
									whiteOverlay.parentNode.removeChild(whiteOverlay);
								}, 10);
							`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

