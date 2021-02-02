import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { Button } from 'antd'

const ButtonLink = ({ linkTo, staticContext, ...props }) => {
  const navigate = useNavigate()

  return linkTo ? <Button {...props} onClick={() => navigate(linkTo)} /> : <Button {...props} />
}

ButtonLink.defaultProps = {
  linkTo: null,
  staticContext: null,
}

ButtonLink.propTypes = {
  linkTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  staticContext: PropTypes.node,
}

export default ButtonLink
