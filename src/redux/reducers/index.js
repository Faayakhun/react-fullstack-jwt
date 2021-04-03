import {combineReducers} from 'redux'
import user from './user.reducers'
import Cart from './cart.reducers'

const rootReducer = combineReducers({user,Cart})

export default rootReducer