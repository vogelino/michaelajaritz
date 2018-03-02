/* global test, expect */
import sidebarReducer, { uiInitialState } from './sidebarReducer';
import { setSidebarState } from '../actions/sidebarActions';

test('calling sidebarReducer without arguments should return the initialState', () => {
	expect(sidebarReducer()).toEqual(uiInitialState);
});

test('calling sidebarReducer with arguments should return the arguments', () => {
	const args = 'ahahahaha';
	expect(sidebarReducer(args)).toBe(args);
});

test('sidebarReducer should return calculated timeline size', () => {
	const expectedState = true;
	const action = setSidebarState(expectedState);
	expect(sidebarReducer(undefined, action)).toEqual(expectedState);
});
