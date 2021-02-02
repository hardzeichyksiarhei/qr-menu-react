import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Card, Dropdown, Menu, Image, Switch } from 'antd'

import { EditOutlined, MenuOutlined, EyeOutlined } from '@ant-design/icons'

import * as menusActions from '../../../store/actions/menus'
import menusService from '../../../services/menus'
import translate from '../../../intl/translate'

import { SERVER_URL } from '../../../config'

import './MenuCard.scss'

const { Meta } = Card

const MenuCard = ({ menu, onShowPreviewDrawer }) => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const location = useLocation()
  const [isPublishedLoading, setIsPublishedLoading] = useState(false)

  const numberItems = menu.categories.reduce((acc, curr) => acc + curr.dishes.length, 0)

  const handleClickDuplicateMenu = async () => {
    const duplicatedMenu = await menusService.duplicate(menu)
    dispatch(menusActions.addMenu(duplicatedMenu))
  }

  const handleClickRestoreMenu = async () => {
    await menusService.updateById(menu.id, { deletedAt: null })
    dispatch(menusActions.updateMenu(menu.id, { deletedAt: null }))
  }

  const handleClickMoveToTrashMenu = async () => {
    const deletedAt = moment()
    const payload = {
      deletedAt,
      isPublished: false,
      isEnabledToOrder: false,
    }
    await menusService.updateById(menu.id, payload)
    dispatch(menusActions.updateMenu(menu.id, payload))
  }

  const handleClickDeleteMenu = async () => {
    await menusService.deleteById(menu.id)
    dispatch(menusActions.deleteMenu(menu.id))
  }

  const handleChangePublishedMenu = async (isPublished) => {
    setIsPublishedLoading(true)
    const payload = {
      isPublished,
      isEnabledToOrder: isPublished ? menu.isEnabledToOrder : false,
    }
    await menusService.updateById(menu.id, payload)
    dispatch(menusActions.updateMenu(menu.id, payload))
    setIsPublishedLoading(false)
  }

  return (
    <Card
      className="menu-card"
      bodyStyle={{ padding: 10 }}
      cover={
        <Image
          src={
            menu.photo
              ? `${SERVER_URL}/uploads/${menu.userId}/large/${menu.photo.sizes.large}`
              : 'https://via.placeholder.com/1366x768?text=QR Menu'
          }
          fallback="https://via.placeholder.com/1366x768?text=QR Menu"
          preview={false}
          alt={menu.title}
        />
      }
      actions={[
        location.pathname !== '/menus/trash' ? (
          <Link to={`/menus/${menu.id}/edit`}>
            <EditOutlined key="edit" />
          </Link>
        ) : null,
        <EyeOutlined key="preview" onClick={onShowPreviewDrawer} />,
        <Dropdown
          overlay={
            <Menu>
              {location.pathname !== '/menus/trash' ? (
                <Menu.Item onClick={handleClickDuplicateMenu}>{translate('Duplicate')}</Menu.Item>
              ) : null}
              {!menu.deletedAt ? (
                <Menu.Item onClick={handleClickMoveToTrashMenu} danger>
                  {translate('MoveToTrash')}
                </Menu.Item>
              ) : (
                [
                  <Menu.Item onClick={handleClickRestoreMenu}>Restore</Menu.Item>,
                  <Menu.Item onClick={handleClickDeleteMenu} danger>
                    {translate('Delete')}
                  </Menu.Item>,
                ]
              )}
            </Menu>
          }
          placement="bottomCenter"
          arrow
        >
          <MenuOutlined key="menu" />
        </Dropdown>,
      ]}
      hoverable
    >
      {location.pathname !== '/menus/trash' ? (
        <div className="menu-availability-block">
          <div className={`menu-published ${menu.isPublished ? 'published' : 'unpublished'}`}>
            <div className="menu-published__switch">
              <Switch
                defaultChecked={menu.isPublished}
                loading={isPublishedLoading}
                onChange={handleChangePublishedMenu}
              />
            </div>
            <div className="menu-published__label">
              {menu.isPublished
                ? intl.formatMessage({ id: 'Published' })
                : intl.formatMessage({ id: 'Unpublished' })}
            </div>
          </div>
        </div>
      ) : null}
      <Meta
        title={menu.title}
        description={`${menu.categories.length} ${intl.formatMessage({
          id: 'categories',
        })} , ${numberItems} ${intl.formatMessage({
          id: 'items',
        })}`}
      />
    </Card>
  )
}

MenuCard.defaultProps = {
  onShowPreviewDrawer: () => {},
}

MenuCard.propTypes = {
  menu: PropTypes.instanceOf(Object).isRequired,
  onShowPreviewDrawer: PropTypes.func,
}

export default MenuCard
