import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

export default (initialState) => createStore(rootReducer, initialState, composeWithDevTools())
