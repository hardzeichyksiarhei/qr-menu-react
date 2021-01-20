import React from 'react'
import { useSelector } from 'react-redux'

import { Dropdown, Menu, Button } from 'antd'
import { ProfileOutlined, LogoutOutlined } from '@ant-design/icons'
import translate from '../intl/translate'

import authSelectors from '../store/selectors/auth'
import { useAuth } from '../auth/AuthProvider'

const getProfileMenu = (user, logout) => (
  <Menu className="profile-menu">
    <Menu.Item className="profile-menu__item" key="1" icon={<ProfileOutlined />}>
      {translate('Profile')}
    </Menu.Item>
    <Menu.Item className="profile-menu__item" key="2" icon={<LogoutOutlined />} onClick={logout}>
      {translate('Logout')}
    </Menu.Item>
  </Menu>
)

const ProfileDropdown = () => {
  const user = useSelector(authSelectors.user)
  const { logout } = useAuth()

  return (
    <Dropdown overlay={getProfileMenu(user, logout)} trigger="click">
      <Button type="dashed" size="large">
        {translate('MyProfile')}
      </Button>
    </Dropdown>
  )
}

export default ProfileDropdown
