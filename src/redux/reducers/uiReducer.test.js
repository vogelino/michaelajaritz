/* global test, expect */
import uiReducer, { uiInitialState } from './uiReducer';
import { setUiDimensions } from '../actions/uiActions';

test('calling uiReducer without arguments should return the initialState', () => {
	expect(uiReducer()).toEqual(uiInitialState);
});

test('calling uiReducer with arguments should return the arguments', () => {
	const args = 'ahahahaha';
	expect(uiReducer(args)).toBe(args);
});

test('uiReducer should return calculated timeline size', () => {
	const actionPayload = {
		width: 1000,
		height: 1000,
	};
	const action = setUiDimensions(actionPayload);
	const expectedState = {
		windowWidth: actionPayload.width,
		windowHeight: actionPayload.height,
	};
	expect(uiReducer(undefined, action)).toEqual(expectedState);
});
