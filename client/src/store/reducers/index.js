import { combineReducers } from 'redux'
import app from './app'
import menus from './menus'
import order from './order'

export default combineReducers({
  app,
  menus,
  order,
})
