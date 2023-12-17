import counterReducer from './couter'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    //we access this by any key we want
    counter: counterReducer,
    isLogged: loggedReducer
})
export default allReducers