import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card, Button, Spin } from 'antd'

import { ReactSortable } from 'react-sortablejs'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import VerticalScrolling from '../../VerticalScrolling'
import DishItem from '../items/DishItem'

import './MenuEditorCard.scss'

const MenuEditorCard = () => {
  const [dishes, setDishes] = useState([])
  const dispatch = useDispatch()

  const selectedCategoryId = useSelector(menuSelectors.selectedCategoryId)
  const selectedCategory = useSelector(menuSelectors.categoryById(selectedCategoryId))
  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)

  useEffect(() => {
    if (selectedCategory) setDishes(selectedCategory.dishes)
  }, [selectedCategory])

  // eslint-disable-next-line no-shadow
  const handleSetDishes = (dishes) => {
    dispatch(menuActions.setDishes(selectedCategoryId, dishes))
  }

  return (
    <div className="menu-editor">
      <Card title="Dishes" extra={<Button type="primary">Add new</Button>}>
        <div
          className={`menu-editor__content ${
            isMenuLoading ? 'menu-editor__content--loading' : ''
          } ${!isMenuLoading && !dishes.length ? 'menu-editor__content--empty' : ''}`}
        >
          {isMenuLoading ? (
            <Spin size="large" />
          ) : (
            <VerticalScrolling>
              <div className="dish-list">
                <ReactSortable
                  list={dishes}
                  setList={handleSetDishes}
                  handle=".move"
                  animation={200}
                >
                  {dishes.map((dish) => (
                    <DishItem dish={dish} key={dish.id} />
                  ))}
                </ReactSortable>
              </div>
            </VerticalScrolling>
          )}
        </div>
      </Card>
    </div>
  )
}

export default MenuEditorCard
