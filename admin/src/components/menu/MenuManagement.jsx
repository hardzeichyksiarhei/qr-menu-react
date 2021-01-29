import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PageHeader, Button, Modal, notification, Space } from 'antd'

import * as menuActions from '../../store/actions/menu'
import menuSelectors from '../../store/selectors/menu'

import CategoriesEditorCard from './cards/CategoriesEditorCard'
import DishesEditorCard from './cards/DishesEditorCard'

import './MenuManagement.scss'
import MenuSettingsEditorCard from './cards/MenuSettingsEditorCard'

const MenuManagement = () => {
  const dispatch = useDispatch()

  const [isMenuNotSave, setIsMenuNotSave] = useState(false)
  const [isSettingsEditorVisible, setIsSettingsEditorVisible] = useState(false)

  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)
  const isMenuBusy = useSelector(menuSelectors.isMenuBusy)
  const isMenuEqualCache = useSelector(menuSelectors.isMenuEqualCache)
  const menu = useSelector(menuSelectors.menu)

  const handleDiscardMenu = useCallback(() => {
    dispatch(menuActions.discardMenu())
    notification.close('menu-not-save')
  }, [dispatch])

  useEffect(() => {
    setIsMenuNotSave(!isMenuLoading && !isMenuEqualCache)
    if (!isMenuLoading && !isMenuEqualCache) {
      notification.warning({
        message: 'Warning',
        description: (
          <div>
            <p>Changes have been made to the menu! Please save your changes or discard them.</p>
            <Space>
              <Button onClick={() => notification.close('menu-not-save')}>Cancel</Button>
              <Button type="danger" onClick={handleDiscardMenu}>
                Discord
              </Button>
            </Space>
          </div>
        ),
        placement: 'bottomLeft',
        duration: 0,
        key: 'menu-not-save',
      })
    }
  }, [isMenuLoading, isMenuEqualCache, handleDiscardMenu])

  const handleClickSettingsMenu = () => {
    setIsSettingsEditorVisible(true)
  }

  const handleClickSaveMenu = () => {
    dispatch(menuActions.saveMenu())
    notification.close('menu-not-save')
  }

  const menuTitle = (
    <div className="menu-title">
      <span>{isMenuNotSave ? <span style={{ color: '#faad14' }}>* </span> : ''}Menu</span>
      {!isMenuLoading && menu.title ? `: ${menu.title}` : null}
      {isMenuNotSave ? <span style={{ color: '#faad14' }}> - not saved</span> : null}
    </div>
  )

  return (
    <div id="menu-constructor" className="menu-constructor">
      <PageHeader
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
        title={menuTitle}
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
