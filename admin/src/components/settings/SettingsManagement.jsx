import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeader, Button, Spin } from 'antd'

import { fetchSettings, clearSettings, updateSettings } from '../../store/actions/settings'
import settingsSelectors from '../../store/selectors/settings'

import './SettingsManagement.scss'
import SettingsRegionCard from './cards/SettingsRegionCard'
import SettingsSupplierCard from './cards/SettingsSupplierCard'

const SettingsManagement = () => {
  const dispatch = useDispatch()

  const { settings } = useSelector(settingsSelectors.settings)

  useEffect(() => {
    dispatch(fetchSettings())

    return () => {
      dispatch(clearSettings())
    }
  }, [dispatch])

  const changeField = (field, subField, value) => {
    dispatch(updateSettings(settings, field, subField, value))
    console.log(settings)
  }

  if (!settings) {
    return (
      <div className="d-flex justify-content-center">
        <Spin size="large" />
      </div>
    )
  }

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
        <SettingsRegionCard regionSettings={settings.regionSettings} changeField={changeField} />
        <SettingsSupplierCard supplier={settings.supplier} changeField={changeField} />
      </div>
    </>
  )
}
export default SettingsManagement
