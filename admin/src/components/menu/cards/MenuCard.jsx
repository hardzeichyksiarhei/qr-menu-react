import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Card, Dropdown, Menu } from 'antd'

import { EditOutlined, MenuOutlined, EyeOutlined } from '@ant-design/icons'

import * as menusActions from '../../../store/actions/menus'
import menusService from '../../../services/menus'

const { Meta } = Card

const MenuCard = ({ menu }) => {
  const dispatch = useDispatch()

  const numberItems = menu.categories.reduce((acc, curr) => acc + curr.dishes.length, 0)

  const handleClickDuplicateMenu = async () => {
    const duplicatedMenu = await menusService.duplicate(menu)
    dispatch(menusActions.addMenu(duplicatedMenu))
  }

  const handleClickDeleteMenu = async () => {
    await menusService.deleteById(menu.id)
    dispatch(menusActions.deleteMenu(menu.id))
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
        <EyeOutlined key="preview" />,
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={handleClickDuplicateMenu}>Duplicate</Menu.Item>
              <Menu.Item onClick={handleClickDeleteMenu} danger>
                Delete
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

MenuCard.propTypes = {
  menu: PropTypes.instanceOf(Object).isRequired,
}

export default MenuCard
