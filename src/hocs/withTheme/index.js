import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

export default (WrappedComponent) =>
	(props) => (
		<ThemeProvider theme={theme}>
			<WrappedComponent {...props} />
		</ThemeProvider>
	);

