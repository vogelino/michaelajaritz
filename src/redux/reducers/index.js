import { combineReducers } from 'redux';
import ui from './uiReducer';
import sidebar from './sidebarReducer';

export default combineReducers({
	ui,
	isSidebarOpen: sidebar,
});
