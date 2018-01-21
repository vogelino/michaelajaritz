import React from 'react';
import { Provider } from 'react-redux';
import { injectGlobal, hydrate } from 'emotion';
import HtmlHead from '../../components/HtmlHead';
import ThemeProvider from '../../theme';
import TextsProvider from '../../texts';
import configureStore from '../../redux/store/configureStore';
import CoreLayout from '../withResize';
import Sidebar from '../../components/Sidebar';
import IllustrationZone from '../../components/IllustrationZone';
import Content from '../../components/Content';

/* eslint-disable no-unused-expressions */
injectGlobal`
	body {
		margin: 0;
	}

	.page-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}
`;
/* eslint-enable no-unused-expressions */

export default (pageName) => (Component) => {
	/* eslint-disable no-underscore-dangle */
	if (typeof window !== 'undefined') {
		hydrate(window.__NEXT_DATA__.ids);
	}
	/* eslint-enable no-underscore-dangle */

	return (props) => (
		<Provider store={configureStore()}>
			<TextsProvider>
				<ThemeProvider>
					<div className="page-wrapper">
						<HtmlHead pageName={pageName} />
						<IllustrationZone pageName={pageName} />
						<Sidebar pageName={pageName} />
						<Content>
							<CoreLayout>
								<Component pageName={pageName} {...props} />
							</CoreLayout>
						</Content>
					</div>
				</ThemeProvider>
			</TextsProvider>
		</Provider>
	);
};

