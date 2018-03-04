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
