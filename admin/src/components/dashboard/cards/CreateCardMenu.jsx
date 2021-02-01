import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from 'antd'

import './CreateCardMenu.scss'

const CreateCardMenu = () => {
  const navigate = useNavigate()

  return (
    <Card
      className="create-menu-card"
      onClick={() => navigate('/menus/create')}
      bodyStyle={{ padding: 0 }}
      hoverable
    >
      <div className="create-menu-card__cover" />
      <h3 className="create-menu-card__title">Create menu</h3>
    </Card>
  )
}

export default CreateCardMenu
