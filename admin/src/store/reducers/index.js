import { combineReducers } from 'redux'
import auth from './auth'
import menu from './menu'
import menus from './menus'
import settings from './settings'
import language from './language'
import orders from './orders'

export default combineReducers({
  auth,
  menu,
  menus,
  settings,
  language,
  orders,
})
