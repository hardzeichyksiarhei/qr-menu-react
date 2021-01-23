import React from 'react'

import { PageHeader, Button } from 'antd'

import CategoriesEditorCard from './cards/CategoriesEditorCard'
import DishesEditorCard from './cards/DishesEditorCard'

import './MenuManagement.scss'

const MenuManagement = () => (
  <div id="menu-constructor" className="menu-constructor">
    <PageHeader
      style={{ paddingLeft: 0, paddingRight: 0 }}
      ghost={false}
      title="Menu"
      extra={[
        <Button type="primary" key="save">
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

export default MenuManagement
