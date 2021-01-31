import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeader, Button, Spin } from 'antd'
import { useIntl } from 'react-intl'

import {
  fetchSettings,
  clearSettings,
  updateSettings,
  saveSettings,
} from '../../store/actions/settings'
import settingsSelectors from '../../store/selectors/settings'

import translate from '../../intl/translate'

import './SettingsManagement.scss'
import SettingsRegionCard from './cards/SettingsRegionCard'
import SettingsSupplierCard from './cards/SettingsSupplierCard'

const SettingsManagement = () => {
  const dispatch = useDispatch()

  const { settings, isSettingsLoading } = useSelector(settingsSelectors.settings)
  const intl = useIntl()

  useEffect(() => {
    dispatch(fetchSettings())

    return () => {
      dispatch(clearSettings())
    }
  }, [dispatch])

  const changeField = (field, subField, value) => {
    dispatch(updateSettings(settings, field, subField, value))
  }
  console.log(settings)
  const saveChanges = () => {
    dispatch(saveSettings())
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
        title={intl.formatMessage({ id: 'Settings' })}
        extra={[
          <Button key="1" type="primary" onClick={saveChanges} loading={isSettingsLoading}>
            {translate('Save')}
          </Button>,
        ]}
      />
      <div className="setting-cards">
        <SettingsRegionCard regionSettings={settings.regionSettings} changeField={changeField} />
        <SettingsSupplierCard supplier={settings.supplierSettings} changeField={changeField} />
      </div>
    </>
  )
}
export default SettingsManagement
