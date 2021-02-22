import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'

import { Card, Button, Spin, Modal, Empty } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { ReactSortable } from 'react-sortablejs'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import VerticalScrolling from '../../VerticalScrolling'
import DishItem from '../items/DishItem'
import DishEditorCard from './DishEditorCard'

import translate from '../../../intl/translate'
import './DishesEditorCard.scss'

const DishesEditorCard = () => {
  const intl = useIntl()
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

  let dishList = null
  if (isMenuLoading) {
    dishList = <Spin size="large" />
  } else if (!dishes.length && !isMenuLoading) {
    dishList = <Empty />
  } else {
    dishList = (
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
    )
  }

  return (
    <div className="menu-editor">
      <Card
        title={<h3 className="mb-0">{translate('Dishes')}</h3>}
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => handleActionDish('dish:create')}
          >
            <span>{translate('AddNew')}</span>
          </Button>
        }
      >
        <div
          className={`menu-editor__content ${
            isMenuLoading ? 'menu-editor__content--loading' : ''
          } ${!isMenuLoading && !dishes.length ? 'menu-editor__content--empty' : ''}`}
        >
          {dishList}
        </div>
      </Card>

      <Modal
        title={
          editDish
            ? intl.formatMessage({ id: 'EditDish' })
            : intl.formatMessage({ id: 'CreateDish' })
        }
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
