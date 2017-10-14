import React from 'react';
import { Provider } from 'react-redux';
import Raven from 'raven-js';
import { injectGlobal, hydrate } from 'emotion';
import ThemeProvider from '../../theme';
import TextsProvider from '../../texts';
import configureStore from '../../redux/store/configureStore';
import withResize from '../withResize';
import Sidebar from '../../components/Sidebar';
import IllustrationZone from '../../components/IllustrationZone';
import Content from '../../components/Content';

Raven.config('https://5b9457deb5544977a1851e1217fd8066@sentry.io/214731', {
	environment: process.NODE_ENV,
}).install();

export default (pageName) => (Component) => {
	/* eslint-disable no-underscore-dangle */
	if (typeof window !== 'undefined') {
		hydrate(window.__NEXT_DATA__.ids);
	}
	/* eslint-enable no-underscore-dangle */

	return (props) => {
		/* eslint-disable no-unused-expressions */
		injectGlobal`
			body {
				margin: 0;
			}

			.page-wrapper {
				min-width: 1280px;
				position: absolute;
				width: 100%;
				height: 100%;
			}

			* {
				box-sizing: border-box;
			}
		`;
		/* eslint-enable no-unused-expressions */

		const ComponentWithResize = withResize(Component);
		return (
			<Provider store={configureStore()}>
				<TextsProvider>
					<ThemeProvider>
						<div className="page-wrapper">
							<IllustrationZone pageName={pageName} />
							<Sidebar pageName={pageName} />
							<Content>
								<ComponentWithResize pageName={pageName} {...props} />
							</Content>
						</div>
					</ThemeProvider>
				</TextsProvider>
			</Provider>
		);
	};
};

