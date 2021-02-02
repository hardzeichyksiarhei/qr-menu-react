import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Collapse, Card, Typography, Image } from 'antd'

import { CardCategoryProps } from '../../utils/propsComponents'

import { SERVER_URL } from '../../config'

import './CardCategory.scss'

const { Title } = Typography
const { Panel } = Collapse

function CardCategory({ category, menuId, priceCurrency }: CardCategoryProps) {
  const { userId } = useParams()
  const navigate = useNavigate()

  return (
    <Card
      className="category-card"
      bodyStyle={{ padding: 0 }}
      cover={
        <Image
          src={
            category.photo
              ? `${SERVER_URL}/uploads/${category.photo.userId}/large/${category.photo.sizes.large}`
              : 'https://via.placeholder.com/1366x768?text=QR Menu'
          }
          fallback="https://via.placeholder.com/1366x768?text=QR Menu"
          preview={false}
          alt={category.title}
        />
      }
      hoverable
    >
      <Collapse className="dishes-list" ghost>
        {category.dishes.map((dish) => (
          <Panel
            header={
              <div className="d-flex align-items-center justify-content-between">
                <span>{dish.title}</span>
                <b>{dish.priceValue ? `${dish.priceValue} ${priceCurrency}` : `Free`}</b>
              </div>
            }
            key={dish.id}
            disabled={!dish.isEnabledToOrder}
          >
            <div
              className="dish-item"
              onClick={() =>
                navigate(`/${userId}/menu/${menuId}/category/${category.id}/dish/${dish.id}`)
              }
            >
              <div className="dish-item__photo">
                <Image
                  width={65}
                  src={
                    dish.photo
                      ? `${SERVER_URL}/uploads/${dish.photo.userId}/thumbnail/${dish.photo.sizes.thumbnail}`
                      : 'https://via.placeholder.com/80x80?text=QR Menu'
                  }
                  preview={false}
                />
              </div>
              <div className="dish-item__content">
                <div className="dish-item__meta">
                  {dish.ingredients.length ? (
                    <span>{dish.ingredients.length} ingredients</span>
                  ) : null}
                  {dish.tags.length ? <span>{dish.tags.length} tags</span> : null}
                  {dish.allergens.length ? <span>{dish.allergens.length} allergens</span> : null}
                </div>
              </div>
            </div>
          </Panel>
        ))}
      </Collapse>

      <Title level={3} className="category-card__title">
        {category.title}
      </Title>
    </Card>
  )
}

export default CardCategory
