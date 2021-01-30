import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Card, Dropdown, Menu, Image, Switch } from 'antd'

import { EditOutlined, MenuOutlined, EyeOutlined } from '@ant-design/icons'

import * as menusActions from '../../../store/actions/menus'
import menusService from '../../../services/menus'

import { SERVER_URL } from '../../../config'

import './MenuCard.scss'

const { Meta } = Card

const MenuCard = ({ menu, onShowPreviewDrawer }) => {
  const dispatch = useDispatch()

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
    await menusService.updateById(menu.id, { deletedAt })
    dispatch(menusActions.updateMenu(menu.id, { deletedAt }))
  }

  const handleClickDeleteMenu = async () => {
    await menusService.deleteById(menu.id)
    dispatch(menusActions.deleteMenu(menu.id))
  }

  return (
    <Card
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
        <Link to={`/menus/${menu.id}/edit`}>
          <EditOutlined key="edit" />
        </Link>,
        <EyeOutlined key="preview" onClick={onShowPreviewDrawer} />,
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={handleClickDuplicateMenu}>Duplicate</Menu.Item>
              {!menu.deletedAt ? (
                <Menu.Item onClick={handleClickMoveToTrashMenu} danger>
                  Move To Trash
                </Menu.Item>
              ) : (
                [
                  <Menu.Item onClick={handleClickRestoreMenu}>Restore</Menu.Item>,
                  <Menu.Item onClick={handleClickDeleteMenu} danger>
                    Delete
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
      <div className="menu-availability-block">
        <div className="menu-published">
          <div className="menu-published__switch">
            <Switch defaultChecked={menu.isPublished} />
          </div>
          <div className="menu-published__label">PUBLISHED</div>
        </div>
      </div>
      <Meta
        title={menu.title}
        description={`${menu.categories.length} categories, ${numberItems} items`}
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
