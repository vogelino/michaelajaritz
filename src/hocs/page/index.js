import React from 'react';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import HtmlHead from '../../components/HtmlHead';
import TextsProvider from '../../texts';
import configureStore from '../../redux/store/configureStore';
import CoreLayout from '../CoreLayout';
import Sidebar from '../../components/Sidebar';
import IllustrationZone from '../../components/IllustrationZone';
import Content from '../../components/Content';

/* eslint-disable no-unused-expressions */
injectGlobal`
	body {
		margin: 0;
	}

	* {
		box-sizing: border-box;
	}
`;
/* eslint-enable no-unused-expressions */

export default (pageName) => (Component) => (props) => (
	<Provider store={configureStore()}>
		<TextsProvider>
			<CoreLayout>
				<div id="page-wrapper">
					<HtmlHead pageName={pageName} />
					<IllustrationZone pageName={pageName} />
					<Sidebar pageName={pageName} />
					<Content>
						<Component pageName={pageName} {...props} />
					</Content>
				</div>
			</CoreLayout>
		</TextsProvider>
	</Provider>
);

