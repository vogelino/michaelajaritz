import * as types from './actionTypes';

export const setSidebarState = (payload) => ({
	type: types.SIDEBAR_TOGGLED,
	payload,
});

