import React, { useState } from 'react'
import { useAsync } from 'react-use'

import { Card, List, Image, Empty, Spin } from 'antd'
import { StarFilled } from '@ant-design/icons'

import VerticalScrolling from '../../VerticalScrolling'

import menusService from '../../../services/menus'

import { SERVER_URL } from '../../../config'

import './PopularDishesCard.scss'

const PopularDishesCard = () => {
  const [dishes, setDishes] = useState([])
  const [isDishesLoading, setIsDishesLoading] = useState(true)

  useAsync(async () => {
    const popularDishes = await menusService.getPopularDishes()
    setDishes(popularDishes)
    setIsDishesLoading(false)
  })

  let content = null

  if (!dishes.length) {
    if (isDishesLoading) {
      content = (
        <div className="popular-dish-loading">
          <Spin size="large" />
        </div>
      )
    } else {
      content = (
        <div className="popular-dish-empty">
          <Empty />
        </div>
      )
    }
  } else {
    content = (
      <List
        itemLayout="horizontal"
        dataSource={dishes}
        renderItem={(dish) => (
          <List.Item>
            <div className="popular-dish-item">
              <div className="popular-dish-item__photo">
                <Image
                  width={70}
                  src={
                    dish.photo
                      ? `${SERVER_URL}/uploads/${dish.photo.userId}/thumbnail/${dish.photo.sizes.thumbnail}`
                      : 'https://via.placeholder.com/80x80?text=QR Menu'
                  }
                  preview={false}
                />
              </div>
              <div className="popular-dish-item__content">
                <h4 className="popular-dish-item__title">{dish.title}</h4>
                <div className="popular-dish-item__meta">
                  {dish.ingredients.length ? (
                    <span>{dish.ingredients.length} ingredients</span>
                  ) : null}
                  {dish.tags.length ? <span>{dish.tags.length} tags</span> : null}
                  {dish.allergens.length ? <span>{dish.allergens.length} allergens</span> : null}
                </div>
                <div className="popular-dish-item__rating">
                  <StarFilled style={{ color: '#1890ff' }} />
                  <span>{dish.calculateRating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    )
  }

  return (
    <Card className="popular-dishes-card" bodyStyle={{ height: '100%', padding: 0 }} bordered>
      <h3 className="popular-dishes-card__title">Popular Dishes</h3>
      <VerticalScrolling maxHeight="calc(100% - 46px)">{content}</VerticalScrolling>
    </Card>
  )
}

export default PopularDishesCard
