import * as types from '../actions/actionTypes';

export const uiInitialState = {
	windowWidth: 0,
	windowHeight: 0,
};

export default (state = uiInitialState, action = {}) => {
	switch (action.type) {
	case types.WINDOW_RESIZED: return {
		windowWidth: action.payload.width,
		windowHeight: action.payload.height,
	};
	default: return state;
	}
};
