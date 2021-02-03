import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Button } from 'antd'
import { ArrowLeftOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import './Navigation.scss'

const MenuBar = (props: any) => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="bottom-navigation">
      {location.pathname !== `/${userId}`
        ? [
            <Button
              icon={<ArrowLeftOutlined style={{ fontSize: '26px' }} />}
              onClick={() => window.history.back()}
              type="text"
              key="back"
            />,
            <Button
              icon={<HomeOutlined style={{ fontSize: '26px' }} />}
              onClick={() => navigate(`/${userId}`)}
              type="text"
              key="home"
            />,
          ]
        : null}

      <Button
        icon={<ShoppingCartOutlined style={{ fontSize: '26px' }} />}
        onClick={() => props.onShowCartDrawer()}
        type="text"
      />
    </div>
  )
}

export default MenuBar
