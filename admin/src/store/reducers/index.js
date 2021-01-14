import { combineReducers } from 'redux'
import auth from './auth'
import menu from './menu'
import menus from './menus'
import settings from './settings'

export default combineReducers({
  auth,
  menu,
  menus,
  settings,
})
