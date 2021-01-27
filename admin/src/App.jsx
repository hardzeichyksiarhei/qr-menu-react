import React from 'react'
import { useSelector } from 'react-redux'
import Router from './router/Router'
import { IntlProvider, LOCALES } from './intl'
import languageSelectors from './store/selectors/language'

import './scss/main.scss'

function App() {
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
