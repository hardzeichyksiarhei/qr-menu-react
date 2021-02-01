import React from 'react'

import { Card } from 'antd'

import './CreateCardMenu.scss'

const CreateCardMenu = () => (
  <Card className="create-menu-card" bodyStyle={{ padding: 0 }} hoverable>
    <div className="create-menu-card__cover" />
    <h3 className="create-menu-card__title">Create menu</h3>
  </Card>
)

export default CreateCardMenu
