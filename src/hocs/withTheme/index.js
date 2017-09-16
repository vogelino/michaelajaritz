import React from 'react';
import { ThemeProvider } from 'react-emotion';
import theme from '../../theme/theme';

export default (WrappedComponent) =>
	(props) => (
		<ThemeProvider theme={theme}>
			<WrappedComponent {...props} />
		</ThemeProvider>
	);

