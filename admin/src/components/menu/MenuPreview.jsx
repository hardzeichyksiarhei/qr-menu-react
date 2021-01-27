import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Button } from 'antd'

import './MenuPreview.scss'

const MenuPreview = ({ url }) => {
  const [deviceType, setDeviceType] = useState('mobile')

  const previewDeviceClasses = classNames({
    'preview-device': true,
    'preview-device--mobile': deviceType === 'mobile',
    'preview-device--tablet': deviceType === 'tablet',
  })

  const deviceClasses = classNames({
    iphone: deviceType === 'mobile',
    ipad: deviceType === 'tablet',
  })
  return (
    <div className="menu-preview">
      <div className={previewDeviceClasses}>
        <div className="preview-device__toggle">
          <Button type="primary" onClick={() => setDeviceType('mobile')}>
            Mobile
          </Button>
          <Button type="primary" onClick={() => setDeviceType('tablet')}>
            Tablet
          </Button>
        </div>

        <div className={`black portrait ${deviceClasses}`}>
          <div className="caseBorder" />
          <div className="case" />
          <div className="reflection" />
          <div className="screen" />
          <div className="camera" />
          <div className="speaker" />
          <div className="homeButtonBorder" />
          <div className="homeButton" />
          <div className="content centerVH">
            <iframe src={url} seamless title="Preview" />
          </div>
        </div>
      </div>
    </div>
  )
}

MenuPreview.propTypes = {
  url: PropTypes.string.isRequired,
}

export default MenuPreview
