import { combineReducers } from 'redux'
import auth from './auth'
import menus from './menus'

export default combineReducers({
  auth,
  menus,
})
