import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PageHeader, Button, Modal } from 'antd'

import * as menuActions from '../../store/actions/menu'
import menuSelectors from '../../store/selectors/menu'

import CategoriesEditorCard from './cards/CategoriesEditorCard'
import DishesEditorCard from './cards/DishesEditorCard'

import './MenuManagement.scss'
import MenuSettingsEditorCard from './cards/MenuSettingsEditorCard'

const MenuManagement = () => {
  const dispatch = useDispatch()

  const [isSettingsEditorVisible, setIsSettingsEditorVisible] = useState(false)

  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)
  const isMenuBusy = useSelector(menuSelectors.isMenuBusy)
  const menu = useSelector(menuSelectors.menu)

  const handleClickSettingsMenu = () => {
    setIsSettingsEditorVisible(true)
  }

  const handleClickSaveMenu = () => {
    dispatch(menuActions.saveMenu())
  }

  return (
    <div id="menu-constructor" className="menu-constructor">
      <PageHeader
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
        title={!isMenuLoading && menu.title ? `Menu: ${menu.title}` : 'Menu'}
        extra={[
          <Button type="default" key="settings" onClick={handleClickSettingsMenu}>
            Settings
          </Button>,
          <Button type="primary" key="save" onClick={handleClickSaveMenu} loading={isMenuBusy}>
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

      <Modal
        title="Settings"
        visible={isSettingsEditorVisible}
        width={720}
        footer={null}
        closable={false}
        destroyOnClose
      >
        <MenuSettingsEditorCard
          onCancel={() => setIsSettingsEditorVisible(false)}
          onSave={() => setIsSettingsEditorVisible(false)}
        />
      </Modal>
    </div>
  )
}

export default MenuManagement
