import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Masonry from 'react-masonry-css'

import { PageHeader, Row, Col } from 'antd'
import CardCategory from '../CardCategory/CardCategory'

import * as menusActions from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import { MenuProps, CategoryProps } from '../../utils/propsComponents'

import './CategoryPage.scss'

const CategoryPage = () => {
  const dispatch = useDispatch()

  const { userId, menuId } = useParams()

  const menu: MenuProps = useSelector(menusSelectors.menuById(menuId))
  const categoriesByMenuId: CategoryProps[] = useSelector(menusSelectors.categoriesByMenuId(menuId))

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  return (
    <div className="categories-page">
      <PageHeader
        onBack={() => window.history.back()}
        title="Categories"
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
      />
      {menu && (
        <Masonry
          breakpointCols={{
            default: 4,
            1600: 3,
            1200: 2,
            768: 1,
          }}
          className="categories-masonry-grid"
          columnClassName="categories-masonry-grid__column"
        >
          {categoriesByMenuId.map((category: CategoryProps) => {
            return (
              <div className="categories-masonry-grid__item">
                <CardCategory
                  menuId={menuId}
                  category={category}
                  priceCurrency={menu.priceCurrency}
                  key={category.id}
                />
              </div>
            )
          })}
        </Masonry>
      )}
    </div>
  )
}

export default CategoryPage
