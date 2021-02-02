import { combineReducers } from 'redux'
import menus from './menus'
import order from './order'

export default combineReducers({
  menus,
  order,
})
