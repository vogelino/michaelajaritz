import * as types from '../actions/actionTypes';

export const uiInitialState = {
	windowWidth: 1300,
	windowHeight: 800,
	clientSideReady: false,
};

export default (state = uiInitialState, action = {}) => {
	switch (action.type) {
	case types.WINDOW_RESIZED: return { ...state, ...action.payload };
	case types.CLIENT_SIDE_IS_READY: return { ...state, clientSideReady: action.payload };
	default: return state;
	}
};
