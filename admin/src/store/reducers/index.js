import { combineReducers } from 'redux'
import auth from './auth'
import menu from './menu'
import menus from './menus'
import settings from './settings'
import mediafiles from './mediafiles'

export default combineReducers({
  auth,
  menu,
  menus,
  settings,
  mediafiles,
})
