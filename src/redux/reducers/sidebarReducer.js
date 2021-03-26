import * as types from '../actions/actionTypes';

export const uiInitialState = false;

const sidebarRenducer = (state = uiInitialState, action = {}) => {
	switch (action.type) {
	case types.SIDEBAR_TOGGLED: return action.payload;
	default: return state;
	}
};

export default sidebarRenducer;
