import { combineReducers } from 'redux'
import sidebar from './sidebarReducer'

export default combineReducers({
	isSidebarOpen: sidebar,
})
