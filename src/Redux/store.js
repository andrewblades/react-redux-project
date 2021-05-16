import { applyMiddleware, createStore, combineReducers } from 'redux'
import { stateReducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


// the component that has all the reducers
const rootReducer = combineReducers({
    allState: stateReducer
})


// the STORE
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
console.log(store)

export default store