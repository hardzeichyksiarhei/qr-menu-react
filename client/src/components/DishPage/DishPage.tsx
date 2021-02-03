import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Image, Spin, PageHeader, Empty } from 'antd'

import * as menusActions from '../../store/actions/menus'
import * as orderActions from '../../store/actions/order'
import menusSelectors from '../../store/selectors/menus'

import { SERVER_URL } from '../../config'

import { Dish } from '../../utils/propsComponents'

import './DishPage.scss'

const DishPage = () => {
  const dispatch = useDispatch()

  const { userId, menuId, categoryId, dishId } = useParams()

  const isMenusLoading: Boolean = useSelector(menusSelectors.isMenusLoading)
  const menu: any = useSelector(menusSelectors.menuById(menuId))
  const category: any = useSelector(menusSelectors.category(menuId)(categoryId))
  const dish: Dish = useSelector(menusSelectors.dish(menuId)(categoryId)(dishId))

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  const addDish = () => {
    console.log(dish)

    dispatch(orderActions.addItem(dish))
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
    <div className="">
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
            <h4>Allergens</h4>
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
          <Button className="dish__add-to-cart" type="primary" onClick={addDish}>
            <span>ADD TO CART</span>
            <b>{dish.priceValue ? `${dish.priceValue} ${menu.priceCurrency}` : `Free`}</b>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default DishPage
