
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
	const ComponentWithTheme = (props) => (
		<ThemeProvider theme={{}}>
			</WrappedComponent>
		</ThemeProvider>
	);
};

