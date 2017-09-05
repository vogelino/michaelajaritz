import React from 'react';
import { Provider } from 'react-redux';
import TextsProvider from '../../texts';
import HtmlHead from '../../components/HtmlHead';
import configureStore from '../../redux/store/configureStore';
import withResize from '../withResize';

export default (pageName) => (Component) => (props) => {
	const ComponentWithResize = withResize(Component);
	return (
		<Provider store={configureStore()}>
			<TextsProvider>
				<div className="page-wrapper">
					<HtmlHead pageName={pageName} />
					<ComponentWithResize pageName={pageName} {...props} />
				</div>
			</TextsProvider>
		</Provider>
	);
};
