import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from '../src/redux/store/configureStore';
import theme from '../src/theme';
import CoreLayout from '../src/hocs/CoreLayout';

const CustomApp = ({ Component, pageProps }) => (
	<Provider store={configureStore()}>
		<ThemeProvider theme={theme}>
			<CoreLayout>
				<Component {...pageProps} />
			</CoreLayout>
		</ThemeProvider>
	</Provider>
);

CustomApp.propTypes = {
	Component: PropTypes.element.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default CustomApp;
