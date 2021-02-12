import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Image, Spin, PageHeader, Empty, Space, Modal, message } from 'antd'
import { StarFilled, StarOutlined, QuestionCircleOutlined } from '@ant-design/icons'

import Rating from 'react-rating'

import * as menusActions from '../../store/actions/menus'
import * as orderActions from '../../store/actions/order'
import menusSelectors from '../../store/selectors/menus'

import menusService from '../../services/menus'

import { SERVER_URL } from '../../config'
import { ALLERGENS } from '../../default/menus.default'

import { Dish } from '../../utils/propsComponents'

import './DishPage.scss'

const DishPage = () => {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0)
  const [isAllergensModalVisible, setIsAllergensModalVisible] = useState(false)

  const { userId, menuId, categoryId, dishId } = useParams()

  const isMenusLoading: Boolean = useSelector(menusSelectors.isMenusLoading)
  const menu: any = useSelector(menusSelectors.menuById(menuId))
  const category: any = useSelector(menusSelectors.category(menuId)(categoryId))
  const dish: Dish = useSelector(menusSelectors.dish(menuId)(categoryId)(dishId))

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  useEffect(() => {
    if (dish && dish.rating) {
      const [value1, value2]: number[] = dish.rating.reduce(
        (acc, curr) => {
          acc[0] += curr.key * curr.value
          acc[1] += curr.value
          return acc
        },
        [0, 1],
      )

      setRating(value1 / value2)
    }
  }, [dish])

  const addDish = () => {
    message.info('Added to cart', 0.5)
    dispatch(orderActions.addItem(dish))
  }

  const handleChangeRating = async (rating: number) => {
    await menusService.updateDishRating(
      { menuId: menu.id, categoryId: category.id, dishId: dish.id },
      rating,
    )
  }

  if (!dish && isMenusLoading) {
    return (
      <div className="content-loading">
        <Spin size="large" />
      </div>
    )
  }

  if (!dish && !isMenusLoading) {
    return (
      <div className="content-empty">
        <Empty />
      </div>
    )
  }

  return (
    <div className="dish-page">
      <PageHeader
        onBack={() => window.history.back()}
        title="Dish"
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
      />
      <div className="dish">
        <div className="dish__image">
          <Image
            src={
              dish.photo
                ? `${SERVER_URL}/uploads/${dish.photo.userId}/medium/${dish.photo.sizes.medium}`
                : 'https://via.placeholder.com/768x768?text=QR Menu'
            }
            fallback="https://via.placeholder.com/768x768?text=QR Menu"
            preview={true}
            alt={dish.title}
          />
        </div>
        <div className="dish__content">
          <h3 className="dish__category-title">
            Category: <span>{category.title}</span>
          </h3>
          <h2 className="dish__title">{dish.title}</h2>
          <div className="dish__rating">
            <Rating
              placeholderRating={rating}
              placeholderSymbol={<StarFilled style={{ color: '#1890ff' }} />}
              fullSymbol={<StarFilled style={{ color: 'orange' }} />}
              emptySymbol={<StarOutlined style={{ color: '#1890ff' }} />}
              onChange={handleChangeRating}
            />
          </div>
          <p className="dish__description">{dish.description}</p>
          <div className="dish__meta">
            <h4>Tags</h4>
            {dish.tags.length ? (
              <ul className="dish__tags dish-tags">
                {dish.tags.map((tag, idx) => (
                  <li className="dish-tag" key={idx}>
                    <span className="dish-tag__icon">{tag.icon}</span>
                    <span>{tag.label}</span>
                  </li>
                ))}
              </ul>
            ) : (
              '—'
            )}
            <br />
            <h4>Ingredients</h4>
            {dish.ingredients.length ? (
              <ul className="dish__ingredients dish-ingredients">
                {dish.ingredients.map((ingredient: String, idx) => (
                  <li className="dish-ingredient" key={idx}>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            ) : (
              '—'
            )}
            <br />
            <Space className="d-flex align-items-center">
              <h4>Allergens</h4>
              <QuestionCircleOutlined
                style={{ fontSize: '16px' }}
                onClick={() => setIsAllergensModalVisible(true)}
              />
            </Space>
            {dish.allergens.length ? (
              <ul className="dish__ingredients dish-ingredients">
                {dish.allergens.map((allergen, idx) => (
                  <li className="dish-ingredient" key={idx}>
                    <b>{allergen.number}</b> - <span>{allergen.label}</span>
                  </li>
                ))}
              </ul>
            ) : (
              '—'
            )}
          </div>
          <span className="dish__price">
            {dish.priceValue ? `${dish.priceValue} ${menu.priceCurrency}` : `Free`}
          </span>
          {dish.isEnabledToOrder ? (
            <Button className="dish__add-to-cart" type="primary" onClick={addDish}>
              <span>ADD TO CART</span>
              <b>{dish.priceValue ? `${dish.priceValue} ${menu.priceCurrency}` : `Free`}</b>
            </Button>
          ) : (
            <Button className="dish__add-to-cart" danger disabled>
              <span>DISABLED TO ORDER</span>
              <b>{dish.priceValue ? `${dish.priceValue} ${menu.priceCurrency}` : `Free`}</b>
            </Button>
          )}
        </div>
      </div>

      <Modal
        visible={isAllergensModalVisible}
        onCancel={() => setIsAllergensModalVisible(false)}
        width={700}
        title="Allergens"
        footer={false}
      >
        {ALLERGENS.map((allergen) => (
          <p>
            <b>{allergen.number}</b> - {allergen.label}
          </p>
        ))}
      </Modal>
    </div>
  )
}
export default DishPage
