import React from 'react'
import { useSelector } from 'react-redux'

import { Dropdown, Menu, Button, Grid } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import translate from '../intl/translate'

import authSelectors from '../store/selectors/auth'
import { useAuth } from '../auth/AuthProvider'

const { useBreakpoint } = Grid

const getProfileMenu = (user, logout) => (
  <Menu className="profile-menu">
    <Menu.Item className="profile-menu__item" key="1" icon={<SettingOutlined />}>
      {translate('Settings')}
    </Menu.Item>
    <Menu.Item className="profile-menu__item" key="2" icon={<LogoutOutlined />} onClick={logout}>
      {translate('Logout')}
    </Menu.Item>
  </Menu>
)

const ProfileDropdown = () => {
  const user = useSelector(authSelectors.user)
  const { logout } = useAuth()

  const screen = useBreakpoint()

  return (
    <Dropdown overlay={getProfileMenu(user, logout)} trigger="click">
      <Button type="dashed" icon={screen.xs ? <UserOutlined /> : null}>
        {!screen.xs ? translate('MyProfile') : null}
      </Button>
    </Dropdown>
  )
}

export default ProfileDropdown
