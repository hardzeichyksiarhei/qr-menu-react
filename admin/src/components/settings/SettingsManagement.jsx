import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeader, Button, Spin } from 'antd'

import { fetchSettings, clearSettings } from '../../store/actions/settings'
import settingsSelectors from '../../store/selectors/settings'

import './SettingsManagement.scss'
import SettingsRegionCard from './cards/SettingsRegionCard'
import SettingsSupplierCard from './cards/SettingsSupplierCard'

const SettingsManagement = () => {
  const dispatch = useDispatch()

  const { settings, isSettingsLoading } = useSelector(settingsSelectors.settings)

  useEffect(() => {
    dispatch(fetchSettings())

    return () => {
      dispatch(clearSettings())
    }
  }, [dispatch])

  if (!settings && isSettingsLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spin size="large" />
      </div>
    )
  }

  const { regionSettings, supplier } = settings

  return (
    <>
      <PageHeader
        ghost={false}
        title="Settings"
        extra={[
          <Button key="1" type="primary">
            Save
          </Button>,
        ]}
      />
      <div className="setting-cards">
        <SettingsRegionCard regionSettings={regionSettings} />
        <SettingsSupplierCard supplier={supplier} />
      </div>
    </>
  )
}
export default SettingsManagement
