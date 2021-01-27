import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Card, Dropdown, Menu } from 'antd'

import { EditOutlined, MenuOutlined, EyeOutlined } from '@ant-design/icons'

import * as menusActions from '../../../store/actions/menus'
import menusService from '../../../services/menus'

const { Meta } = Card

const MenuCard = ({ menu, onShowPreviewDrawer }) => {
  const dispatch = useDispatch()

  const numberItems = menu.categories.reduce((acc, curr) => acc + curr.dishes.length, 0)

  const handleClickDuplicateMenu = async () => {
    const duplicatedMenu = await menusService.duplicate(menu)
    dispatch(menusActions.addMenu(duplicatedMenu))
  }

  const handleClickMoveToTrashMenu = async () => {
    const deletedAt = moment()
    await menusService.updateById(menu.id, { deletedAt })
    dispatch(menusActions.updateMenu({ deletedAt }))
  }

  return (
    <Card
      cover={
        <img
          alt={menu.title}
          src={menu.photo || 'https://via.placeholder.com/600x360?text=QR Menu'}
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
              <Menu.Item onClick={handleClickMoveToTrashMenu} danger>
                Move To Trash
              </Menu.Item>
            </Menu>
          }
          placement="bottomCenter"
          arrow
        >
          <MenuOutlined key="menu" />
        </Dropdown>,
      ]}
    >
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
