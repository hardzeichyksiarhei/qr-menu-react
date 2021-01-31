import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
  const isSortingRef = useRef(false)

  const [isDishEditorVisible, setIsDishEditorVisible] = useState(false)
  const [editDish, setEditDish] = useState(null)

  const selectedCategoryId = useSelector(menuSelectors.selectedCategoryId)
  const dishes = useSelector(menuSelectors.dishesByCategoryId(selectedCategoryId))
  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)

  const handleSetDishes = (sortedDishes) => {
    if (!isSortingRef.current) return
    isSortingRef.current = false
    dispatch(menuActions.setDishes(selectedCategoryId, sortedDishes))
  }

  const handleUpdateDishes = () => {
    isSortingRef.current = true
  }

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
        setIsDishEditorVisible(false)
        setEditDish(null)
        break
      case 'dish:editor.cancel':
        setIsDishEditorVisible(false)
        setEditDish(null)
        break
      default:
        // eslint-disable-next-line no-console
        console.warn('Dish action not found')
    }
  }

  return (
    <div className="menu-editor">
      <Card
        title={<h3 className="mb-0">Dishes</h3>}
        extra={
          <Button type="primary" onClick={() => handleActionDish('dish:create')}>
            Add new
          </Button>
        }
      >
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
                  onUpdate={handleUpdateDishes}
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
        width={720}
        footer={null}
        closable={false}
        destroyOnClose
        centered
      >
        <DishEditorCard editDish={editDish} onAction={handleActionDish} />
      </Modal>
    </div>
  )
}

export default DishesEditorCard
