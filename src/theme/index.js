import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'theming';
import theme from './theme';

const ComponentWithTheme = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
);

ComponentWithTheme.propTypes = {
	children: PropTypes.element.isRequired,
};

export default ComponentWithTheme;

