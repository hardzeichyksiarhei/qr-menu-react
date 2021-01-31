import React, { useState } from 'react'
import { Card, List, Typography } from 'antd'
import './CardCategory.scss'
import CardDish from '../CardDish/CardDish'
import { CardCategoryProps } from '../../utils/propsComponents'
import { NavLink } from 'react-router-dom'
const { Title } = Typography

function CardCategory({ category, menuId }: CardCategoryProps) {
  const [dishClass, setDishClass] = useState('dish')

  function clickCategory() {
    if (dishClass === 'dish') {
      return setDishClass('dish_visable')
    } else return setDishClass('dish')
  }

  return (
    <Card
      className="category"
      style={{ width: '100%' }}
      cover={
        <img
          className="card__image"
          alt={category.title}
          src={category.photo}
          onClick={clickCategory}
        />
      }
    >
      <List
        className={dishClass}
        bordered
        dataSource={category.dishes}
        renderItem={(item: any) => (
          <List.Item style={{ padding: '0' }} key={item.title}>
            <NavLink to={`/menu=${menuId}/category=${category.id}/dish=${item.id}`}>
              <CardDish key={item.title} dish={item} />
            </NavLink>
          </List.Item>
        )}
      />
      <Title level={3} style={{ color: '#ffffff' }} className="category__title">
        {category.title}
      </Title>
    </Card>
  )
}

export default CardCategory
