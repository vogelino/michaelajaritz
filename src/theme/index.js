import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';

const ThemeProdiverWrapper = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
);

ThemeProdiverWrapper.propTypes = {
	children: PropTypes.element.isRequired,
};

export default ThemeProdiverWrapper;

