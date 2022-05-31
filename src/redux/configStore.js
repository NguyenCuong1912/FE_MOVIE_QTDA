import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({

});
export const store = createStore(rootReducers, applyMiddleware(thunk));
