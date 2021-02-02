import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Collapse, Card, Typography, Image, List, Grid } from 'antd'

import { CardCategoryProps } from '../../utils/propsComponents'

import { SERVER_URL } from '../../config'

import './CardCategory.scss'

const { Title } = Typography
const { Panel } = Collapse
const { useBreakpoint } = Grid

function CardCategory({ category, menuId }: CardCategoryProps) {
  const { userId } = useParams()
  const navigate = useNavigate()

  const screen = useBreakpoint()

  return (
    <Card
      className="category-card"
      bodyStyle={{ padding: 0 }}
      cover={
        <div className="category-card__cover">
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
          <span className="category-card__cover-mask" />
          <Title level={3} className="category-card__title">
            {category.title}
          </Title>
        </div>
      }
      hoverable
    >
      {screen.xs ? (
        <List
          itemLayout="horizontal"
          dataSource={category.dishes}
          renderItem={(dish) => (
            <List.Item>
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
                  <h4 className="dish-item__title">{dish.title}</h4>
                  <div className="dish-item__meta">
                    {dish.ingredients.length ? (
                      <span>{dish.ingredients.length} ingredients</span>
                    ) : null}
                    {dish.tags.length ? <span>{dish.tags.length} tags</span> : null}
                    {dish.allergens.length ? <span>{dish.allergens.length} allergens</span> : null}
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      ) : (
        <Collapse ghost>
          <Panel
            header={
              <span className="dishes-list-header">
                Dishes <span>{category.dishes.length} items</span>
              </span>
            }
            key="dishes"
          >
            <List
              itemLayout="horizontal"
              dataSource={category.dishes}
              renderItem={(dish) => (
                <List.Item>
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
                      <h4 className="dish-item__title">{dish.title}</h4>
                      <div className="dish-item__meta">
                        {dish.ingredients.length ? (
                          <span>{dish.ingredients.length} ingredients</span>
                        ) : null}
                        {dish.tags.length ? <span>{dish.tags.length} tags</span> : null}
                        {dish.allergens.length ? (
                          <span>{dish.allergens.length} allergens</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      )}
    </Card>
  )
}

export default CardCategory
