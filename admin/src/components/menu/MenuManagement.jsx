import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PageHeader, Button } from 'antd'

import * as menuActions from '../../store/actions/menu'
import menuSelectors from '../../store/selectors/menu'

import CategoriesEditorCard from './cards/CategoriesEditorCard'
import DishesEditorCard from './cards/DishesEditorCard'

import './MenuManagement.scss'

const MenuManagement = () => {
  const dispatch = useDispatch()

  const isMenuBusy = useSelector(menuSelectors.isMenuBusy)

  const handleClickSaveMenu = () => {
    dispatch(menuActions.saveMenu())
  }

  return (
    <div id="menu-constructor" className="menu-constructor">
      <PageHeader
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
        title="Menu"
        extra={[
          <Button type="primary" key="save" onClick={handleClickSaveMenu} disabled={isMenuBusy}>
            Save
          </Button>,
        ]}
      />

      <div className="menu-constructor-grid">
        <div className="menu-constructor-col menu-constructor-col--one">
          <CategoriesEditorCard />
        </div>
        <div className="menu-constructor-col menu-constructor-col--second">
          <DishesEditorCard />
        </div>
      </div>
    </div>
  )
}

export default MenuManagement
