import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { List, Image, Button, Grid } from 'antd'

import { Dish } from '../../utils/propsComponents'

import * as orderActions from '../../store/actions/order'

import { SERVER_URL } from '../../config'

const { useBreakpoint } = Grid

type CardCategoryItemsProps = {
  userId: String,
  menuId: String,
  categoryId: String,
  items: Dish[],
}

const CardCategoryItems = ({ userId, menuId, categoryId, items }: CardCategoryItemsProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const screen = useBreakpoint()

  const addDish = (dish: Dish) => {
    dispatch(orderActions.addItem(dish))
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(dish: Dish) => (
        <List.Item>
          <div className="dish-item">
            <div className="dish-item__photo">
              <Image
                width={screen.xs ? 60 : 90}
                src={
                  dish.photo
                    ? `${SERVER_URL}/uploads/${dish.photo.userId}/thumbnail/${dish.photo.sizes.thumbnail}`
                    : 'https://via.placeholder.com/80x80?text=QR Menu'
                }
                preview={false}
              />
            </div>
            <div className="dish-item__content">
              <h4 className="dish-item__title">{dish.title}</h4>
              <div className="dish-item__meta">
                {dish.ingredients.length ? (
                  <span>{dish.ingredients.length} ingredients</span>
                ) : null}
                {dish.tags.length ? <span>{dish.tags.length} tags</span> : null}
                {dish.allergens.length ? <span>{dish.allergens.length} allergens</span> : null}
              </div>
              <div className="dish-item__actions">
                <Button
                  onClick={() =>
                    navigate(`/${userId}/menu/${menuId}/category/${categoryId}/dish/${dish.id}`)
                  }
                  size="small"
                  type="default"
                >
                  Details
                </Button>
                {dish.isEnabledToOrder ? (
                  <Button onClick={() => addDish(dish)} size="small" type="primary">
                    Add to cart
                  </Button>
                ) : (
                  <Button size="small" danger disabled>
                    Disabled
                  </Button>
                )}
              </div>
            </div>
          </div>
        </List.Item>
      )}
    />
  )
}

export default CardCategoryItems
