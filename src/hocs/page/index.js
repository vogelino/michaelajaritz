import React from 'react';
import { Provider } from 'react-redux';
import Raven from 'raven-js';
import ThemeProvider from '../../theme';
import TextsProvider from '../../texts';
import HtmlHead from '../../components/HtmlHead';
import configureStore from '../../redux/store/configureStore';
import withResize from '../withResize';

Raven.config('https://5b9457deb5544977a1851e1217fd8066@sentry.io/214731', {
	environment: process.NODE_ENV,
}).install();


export default (pageName) => (Component) => (props) => {
	const ComponentWithResize = withResize(Component);
	return (
		<Provider store={configureStore()}>
			<TextsProvider>
				<ThemeProvider>
					<div className="page-wrapper">
						<HtmlHead pageName={pageName} />
						<ComponentWithResize pageName={pageName} {...props} />
					</div>
				</ThemeProvider>
			</TextsProvider>
		</Provider>
	);
};

