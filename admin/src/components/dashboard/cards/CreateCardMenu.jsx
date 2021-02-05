import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card, Image } from 'antd'

import translate from '../../../intl/translate'

import appSelectors from '../../../store/selectors/app'

import { SERVER_URL } from '../../../config'

import './CreateCardMenu.scss'

const CreateCardMenu = () => {
  const navigate = useNavigate()

  const { background } = useSelector(appSelectors.settings)

  return (
    <Card
      className="create-menu-card"
      onClick={() => navigate('/menus/create')}
      bodyStyle={{ padding: 0 }}
      hoverable
    >
      <Image
        src={
          background
            ? `${SERVER_URL}/uploads/${background.userId}/large/${background.sizes.large}`
            : 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
        fallback="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        placeholder
      />

      <div className="create-menu-card__cover" />
      <h3 className="create-menu-card__title">{translate('CreateMenu')}</h3>
    </Card>
  )
}

export default CreateCardMenu
