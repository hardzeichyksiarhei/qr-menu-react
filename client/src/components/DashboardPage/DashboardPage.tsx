import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PageHeader, Space, Statistic, Spin, Empty } from 'antd'
import MenuList from '../MenuList/MenuList'

import * as menusActions from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import { MenuProps } from '../../utils/propsComponents'

const DashboardPage = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()

  const isMenusLoading: MenuProps[] = useSelector(menusSelectors.isMenusLoading)
  const menus: MenuProps[] = useSelector(menusSelectors.menus)

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  const countCategories = useMemo(() => {
    return menus.reduce((acc, menu) => acc + menu.categories.length, 0)
  }, [menus])

  const countItems = useMemo(() => {
    return menus
      .map((menu) => menu.categories)
      .reduce(
        (acc, categories) =>
          acc + categories.reduce((acc, category) => acc + category.dishes.length, 0),
        0,
      )
  }, [menus])

  if (!menus.length && isMenusLoading) {
    return <Spin size="large" />
  }

  if (!menus.length && !isMenusLoading) {
    return <Empty />
  }

  return (
    <div className="menus-page">
      <PageHeader title="Menus" style={{ paddingLeft: 0, paddingRight: 0 }} ghost={false}>
        <Space size="large">
          <Statistic title="All Menus" value={menus.length} />
          <Statistic title="All Categories" value={countCategories} />
          <Statistic title="All Items" value={countItems} />
        </Space>
      </PageHeader>
      <MenuList />
    </div>
  )
}
export default DashboardPage
