import { combineReducers } from 'redux'
import auth from './auth'
import menus from './menus'
import settings from './settings'

export default combineReducers({
  auth,
  menus,
  settings,
})
