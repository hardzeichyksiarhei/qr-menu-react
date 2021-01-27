import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useIntl } from 'react-intl'
import { Card, Select, Form, Radio } from 'antd'
import translate from '../../../intl/translate'

const { Option } = Select

const SettingsRegionCard = ({ regionSettings, changeField }) => {
  const [country, setCountry] = useState(regionSettings.country)
  const [currency, setCurrency] = useState(regionSettings.currency)
  const [timeFormat, setTimeFormat] = useState(regionSettings.timeFormat)

  const intl = useIntl()

  const setField = (subField, value) => changeField('regionSettings', subField, value)

  const onChangeCountry = (e) => {
    setCountry(e)
    setField('country', e)
  }

  const onChangeCurrency = (e) => {
    setCurrency(e)
    setField('currency', e)
  }

  const onChangeTimeFormat = (e) => {
    setTimeFormat(e.target.value)
    setField('timeFormat', e.target.value)
  }

  return (
    <Card
      className="card-item card-shadow"
      title={<h3 className="mb-0">{translate('RegionSettings')}</h3>}
    >
      <Form name="region-settings-form" layout="vertical">
        <Form.Item label={intl.formatMessage({ id: 'Country' })}>
          <Select
            placeholder={intl.formatMessage({ id: 'SelectCountry' })}
            value={country}
            onChange={onChangeCountry}
          >
            <Option value="Belarus">{translate('Belarus')}</Option>
            <Option value="Poland">{translate('Poland')}</Option>
          </Select>
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'DefaultCurrency' })}>
          <Select
            placeholder={intl.formatMessage({ id: 'SelectCountry' })}
            value={currency}
            onChange={onChangeCurrency}
          >
            <Option value="BLR">BLR</Option>
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
          </Select>
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'TimeFormat' })}>
          <Radio.Group onChange={onChangeTimeFormat} value={timeFormat}>
            <Radio value={12}>{translate('FormatTimeWithNumber', { num: 12 })}</Radio>
            <Radio value={24}>{translate('FormatTimeWithNumber', { num: 24 })}</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Card>
  )
}

SettingsRegionCard.propTypes = {
  regionSettings: PropTypes.instanceOf(Object).isRequired,
  changeField: PropTypes.func.isRequired,
}

export default SettingsRegionCard
