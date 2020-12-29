import {createStore, applyMiddleware, combineReducers} from 'redux'
import allReducer from './reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(combineReducers(allReducer), composeWithDevTools(applyMiddleware(thunk)))

export default store