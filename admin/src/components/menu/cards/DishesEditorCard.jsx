import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card, Button, Spin, Modal } from 'antd'

import { ReactSortable } from 'react-sortablejs'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import VerticalScrolling from '../../VerticalScrolling'
import DishItem from '../items/DishItem'
import DishEditorCard from './DishEditorCard'

import './DishesEditorCard.scss'

const DishesEditorCard = () => {
  const dispatch = useDispatch()

  const [dishes, setDishes] = useState([])
  const [isDishEditorVisible, setIsDishEditorVisible] = useState(false)
  const [editDish, setEditDish] = useState(null)

  const selectedCategoryId = useSelector(menuSelectors.selectedCategoryId)
  const selectedCategory = useSelector(menuSelectors.categoryById(selectedCategoryId))
  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)

  useEffect(() => {
    if (selectedCategory) setDishes(selectedCategory.dishes)
  }, [selectedCategory])

  // eslint-disable-next-line no-shadow
  const handleSetDishes = (dishes) => dispatch(menuActions.setDishes(selectedCategoryId, dishes))

  const handleActionDish = (action, dish = null /* payload */) => {
    switch (action) {
      case 'dish:edit':
        setIsDishEditorVisible(true)
        setEditDish(dish)
        break
      case 'dish:create':
        setIsDishEditorVisible(true)
        break
      case 'dish:editor.save':
        break
      case 'dish:editor.cancel':
        break
      default:
        // eslint-disable-next-line no-console
        console.warn('Dish action not found')
    }
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
                    <DishItem dish={dish} key={dish.id} onAction={handleActionDish} />
                  ))}
                </ReactSortable>
              </div>
            </VerticalScrolling>
          )}
        </div>
      </Card>

      <Modal
        title={editDish ? 'Edit Dish' : 'Create dish'}
        visible={isDishEditorVisible}
        footer={null}
        closable={false}
      >
        <DishEditorCard editCategory={editDish} onAction={handleActionDish} />
      </Modal>
    </div>
  )
}

export default DishesEditorCard