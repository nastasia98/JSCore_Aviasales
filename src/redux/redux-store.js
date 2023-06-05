import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import filterReducer from './filter-reducer'
import sortReducer from './sort-reducer'
import ticketsReducer from './tickets-reducer'

const reducers = combineReducers({
  filterReducer,
  sortReducer,
  ticketsReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
