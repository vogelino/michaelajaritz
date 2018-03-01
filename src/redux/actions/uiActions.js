import * as types from './actionTypes';

export const setUiDimensions = (payload) => ({
	type: types.WINDOW_RESIZED,
	payload,
});

export const setClientSideAsReady = () => ({
	type: types.CLIENT_SIDE_IS_READY,
	payload: true,
});

