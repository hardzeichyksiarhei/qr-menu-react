import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Modal } from 'antd'

import mediafilesSelectors from '../../store/selectors/mediafiles'
import { toggleMediafiles } from '../../store/actions/mediafiles'

// import MediafilesCard from './cards/MediafilesCard'

const MediafilesManagement = ({ isOpen }) => {
  const dispatch = useDispatch()
  const { isVisible } = useSelector(mediafilesSelectors.mediafiles)

  useEffect(() => {
    dispatch(toggleMediafiles(isOpen))
  }, [isOpen])

  return <Modal title="Basic" visible={isVisible} />
}

MediafilesManagement.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default MediafilesManagement
