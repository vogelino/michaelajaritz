import React from 'react';
import { Provider } from 'react-redux';
import TextsProvider from '../texts';
import HtmlHead from '../components/HtmlHead';
import configureStore from '../redux/store/configureStore';

export default (pageName) => (Component) => (props) => (
	<Provider store={configureStore()}>
		<TextsProvider>
			<div className="page-wrapper">
				<HtmlHead pageName={pageName} />
				<Component pageName={pageName} {...props} />
			</div>
		</TextsProvider>
	</Provider>
);
