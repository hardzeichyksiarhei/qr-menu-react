/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeader, Button, Spin, Alert, message } from 'antd'
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

  const { settings, isSettingsLoading, isSettingsBusy, settingsSaveError } = useSelector(
    settingsSelectors.settings,
  )
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

  const saveChanges = () => {
    dispatch(saveSettings())
    !isSettingsBusy && !settingsSaveError ? message.success('Settings was saved') : null
  }

  if (isSettingsLoading || !settings) {
    return (
      <div className="d-flex justify-content-center">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <div className="settings-management">
      {settingsSaveError ? <Alert type="error" message={settingsSaveError} banner /> : null}
      <PageHeader
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
        title={intl.formatMessage({ id: 'Settings' })}
        extra={[
          <Button key="1" type="primary" onClick={saveChanges} loading={isSettingsBusy}>
            {translate('Save')}
          </Button>,
        ]}
      />
      <div className="settings-grid">
        <div className="settings-col settings-col--region">
          <SettingsRegionCard regionSettings={settings.regionSettings} changeField={changeField} />
        </div>
        <div className="settings-col settings-col--supplier">
          <SettingsSupplierCard supplier={settings.supplierSettings} changeField={changeField} />
        </div>
      </div>
    </div>
  )
}
export default SettingsManagement
