import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { message } from 'antd'
import { addOrder } from './store/actions/orders'
import Router from './router/Router'
import socket from './socket'
import { IntlProvider, LOCALES } from './intl'
import languageSelectors from './store/selectors/language'

import './scss/main.scss'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    socket.emit('ROOM:JOIN', localStorage.getItem('userId'))
  }, [])

  useEffect(() => {
    socket.on('ROOM:ADD_ORDER', (order) => {
      message.info('Added new order')
      dispatch(addOrder(order))
    })
  }, [dispatch])
  const { language } = useSelector(languageSelectors.language)
  return (
    <div className="App">
      <IntlProvider locale={LOCALES[language]}>
        <Router />
      </IntlProvider>
    </div>
  )
}

export default App
