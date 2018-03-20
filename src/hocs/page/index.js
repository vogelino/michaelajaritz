import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { injectGlobal, ThemeProvider } from 'styled-components';
import HtmlHead from '../../components/HtmlHead';
import TextsProvider from '../../texts';
import configureStore from '../../redux/store/configureStore';
import CoreLayout from '../CoreLayout';
import Sidebar from '../../components/Sidebar';
import IllustrationZone from '../../components/IllustrationZone';
import Content from '../../components/Content';
import theme from '../../theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
	body { margin: 0; }
	* { box-sizing: border-box; }

	@font-face {
		font-family: 'Lato';
		src: url('/static/fonts/lato-bold-webfont.woff2') format('woff2'),
			 url('/static/fonts/lato-bold-webfont.woff') format('woff'),
			 url('/static/fonts/lato-bold-webfont.ttf') format('truetype');
		font-weight: 700, bold;
		font-style: normal;
	}
	@font-face {
		font-family: 'Lato';
		src: url('/static/fonts/lato-italic-webfont.woff2') format('woff2'),
			 url('/static/fonts/lato-italic-webfont.woff') format('woff'),
			 url('/static/fonts/lato-italic-webfont.ttf') format('truetype');
		font-weight: 400, normal;
		font-style: italic;
	}
	@font-face {
		font-family: 'Lato';
		src: url('/static/fonts/lato-light-webfont.woff2') format('woff2'),
			 url('/static/fonts/lato-light-webfont.woff') format('woff'),
			 url('/static/fonts/lato-light-webfont.ttf') format('truetype');
		font-weight: 300, lighter;
		font-style: normal;
	}
	@font-face {
		font-family: 'Lato';
		src: url('/static/fonts/lato-regular-webfont.woff2') format('woff2'),
			 url('/static/fonts/lato-regular-webfont.woff') format('woff'),
			 url('/static/fonts/lato-regular-webfont.ttf') format('truetype');
		font-weight: 400, normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'PT Mono';
		src: url('/static/fonts/pt-mono-webfont.woff2') format('woff2'),
			 url('/static/fonts/pt-mono-webfont.woff') format('woff'),
			 url('/static/fonts/pt-mono-webfont.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
`;
/* eslint-enable no-unused-expressions */

const Page = ({ children, pageName }) => (
	<Provider store={configureStore()}>
		<ThemeProvider theme={theme}>
			<TextsProvider>
				<CoreLayout>
					<HtmlHead pageName={pageName} />
					<IllustrationZone pageName={pageName} />
					<Sidebar pageName={pageName} />
					<Content>
						{children}
					</Content>
				</CoreLayout>
			</TextsProvider>
		</ThemeProvider>
	</Provider>
);

Page.propTypes = {
	children: PropTypes.any.isRequired,
	pageName: PropTypes.string.isRequired,
};

export default Page;
