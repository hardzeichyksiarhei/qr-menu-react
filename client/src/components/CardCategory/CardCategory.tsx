import React, { useState } from 'react'
import { Card, List, Typography, Image } from 'antd'
import './CardCategory.scss'
import CardDish from '../CardDish/CardDish'
import { CardCategoryProps } from '../../utils/propsComponents'
import { NavLink } from 'react-router-dom'
import { SERVER_URL } from '../../config'
const { Title } = Typography

function CardCategory({ category, menuId, priceCurrency }: CardCategoryProps) {
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
    >
      <List
        className={dishClass}
        bordered
        dataSource={category.dishes}
        renderItem={(item: any) => (
          <List.Item style={{ padding: '0' }} key={item.title}>

            <NavLink to={`/menu/${menuId}/category/${category.id}/dish/${item.id}`}>
              <CardDish key={item.title} priceCurrency={priceCurrency} dish={item} />
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
