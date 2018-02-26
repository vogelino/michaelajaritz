import * as types from '../actions/actionTypes';

export const uiInitialState = false;

export default (state = uiInitialState, action = {}) => {
	switch (action.type) {
	case types.SIDEBAR_TOGGLED: return !state;
	default: return state;
	}
};
