import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import MenuDish from '../MenuDish/MenuDish'

import * as menusActions from '../../store/actions/menus'
import * as orderActions from '../../store/actions/order'
import menusSelectors from '../../store/selectors/menus'

import { Dish } from '../../utils/propsComponents'

const DishPage = () => {
  const dispatch = useDispatch()

  const { userId, menuId, categoryId, dishId } = useParams()

  const menu: any = useSelector(menusSelectors.dish(menuId))
  const dish: Dish | null = useSelector(menusSelectors.dish(menuId)(categoryId)(dishId))

  useEffect(() => {
    console.log(1)

    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  const addDish = (dish: Dish) => {
    dispatch(orderActions.addItem(dish))
  }

  return (
    <>{dish && <MenuDish dish={dish} addDish={addDish} priceCurrency={menu?.priceCurrency} />}</>
  )
}
export default DishPage
