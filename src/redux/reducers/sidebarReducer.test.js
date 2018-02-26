/* global test, expect */
import sidebarReducer, { uiInitialState } from './sidebarReducer';
import { toggleSidebar } from '../actions/sidebarActions';

test('calling sidebarReducer without arguments should return the initialState', () => {
	expect(sidebarReducer()).toEqual(uiInitialState);
});

test('calling sidebarReducer with arguments should return the arguments', () => {
	const args = 'ahahahaha';
	expect(sidebarReducer(args)).toBe(args);
});

test('sidebarReducer should return calculated timeline size', () => {
	const action = toggleSidebar();
	const expectedState = true;
	expect(sidebarReducer(undefined, action)).toEqual(expectedState);
});
