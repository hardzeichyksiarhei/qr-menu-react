import React from 'react'
import { useParams } from 'react-router-dom'

import { Collapse, Card, Typography, Image, Grid } from 'antd'

import { CardCategoryProps } from '../../utils/propsComponents'

import { SERVER_URL } from '../../config'

import './CardCategory.scss'
import CardCategoryItems from './CardCategoryItems'

const { Title } = Typography
const { Panel } = Collapse
const { useBreakpoint } = Grid

function CardCategory({ category, menuId }: CardCategoryProps) {
  const { userId } = useParams()

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
        <CardCategoryItems
          userId={userId}
          menuId={menuId}
          categoryId={category.id}
          items={category.dishes}
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
            <CardCategoryItems
              userId={userId}
              menuId={menuId}
              categoryId={category.id}
              items={category.dishes}
            />
          </Panel>
        </Collapse>
      )}
    </Card>
  )
}

export default CardCategory
