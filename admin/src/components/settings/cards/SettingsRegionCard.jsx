import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Card, Select, Form, Radio } from 'antd'

const { Option } = Select

const SettingsRegionCard = ({ regionSettings }) => {
  const [country, setCountry] = useState(regionSettings.country)
  const [currency, setCurrency] = useState(regionSettings.currency)
  const [time, setTime] = useState(regionSettings.time)

  const onChangeCountry = (e) => {
    setCountry(e)
  }

  const onChangeCurrency = (e) => {
    setCurrency(e)
  }

  const onChangeTime = (e) => {
    setTime(e.target.value)
  }

  return (
    <Card className="card-item card-shadow" title={<h2 className="mb-0">Region Settings</h2>}>
      <Form name="region-settings-form" layout="vertical">
        <Form.Item label="Country">
          <Select placeholder="Select country" value={country} onChange={onChangeCountry}>
            <Option value="Belarus">Belarus</Option>
            <Option value="Poland">Poland</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Default currency">
          <Select placeholder="Select currency" value={currency} onChange={onChangeCurrency}>
            <Option value="BLR">BLR</Option>
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Time format">
          <Radio.Group onChange={onChangeTime} value={time}>
            <Radio value={12}>12 global hours</Radio>
            <Radio value={24}>24 global hours</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Card>
  )
}

SettingsRegionCard.propTypes = {
  regionSettings: PropTypes.instanceOf(Object).isRequired,
}

export default SettingsRegionCard
