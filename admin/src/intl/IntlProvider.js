import React from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'

import messages from './messages'

const INTLProvider = ({ children, locale }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
)

INTLProvider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
}

export default INTLProvider
