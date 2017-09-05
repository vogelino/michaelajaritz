import configureStore from './configureStore';
import { uiInitialState } from '../reducers/uiReducer';

test('configureStore should run withour errors', () => {
	configureStore();
});

test('configureStore should save the initial state', () => {
	const store = configureStore({ ui: uiInitialState });
	expect(store.getState().ui).toEqual(uiInitialState);
});
