import { combineReducers } from 'redux'
import auth from './auth'
import menu from './menu'
import menus from './menus'
import settings from './settings'
import language from './language'

export default combineReducers({
  auth,
  menu,
  menus,
  settings,
  language,
})
