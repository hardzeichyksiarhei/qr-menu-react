import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Card, Form, Input } from 'antd'

const SettingsSupplierCard = ({ supplier, changeField }) => {
  const [restaurantName, setRestaurantName] = useState(supplier.restaurantName)
  const [companyName, setCompanyName] = useState(supplier.companyName)
  const [phone, setPhone] = useState(supplier.phone)
  const [website, setWebsite] = useState(supplier.website)

  const setField = (subField, value) => changeField('supplierSettings', subField, value)

  const onChangeRestaurantName = (e) => {
    setRestaurantName(e.target.value)
    setField('restaurantName', e.target.value)
  }

  const onChangeCompanyName = (e) => {
    setCompanyName(e.target.value)
    setField('companyName', e.target.value)
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value)
    setField('phone', e.target.value)
  }

  const onChangeWebsite = (e) => {
    setWebsite(e.target.value)
    setField('website', e.target.value)
  }

  return (
    <Card className="card-item card-shadow" title={<h2 className="mb-0">Supplier</h2>}>
      <Form name="supplier-form" layout="vertical">
        <Form.Item label="Restaurant name" rules={[{ required: true }]}>
          <Input
            placeholder="Add restaurant name"
            value={restaurantName}
            onChange={onChangeRestaurantName}
          />
        </Form.Item>
        <Form.Item label="Company legal name (optional)">
          <Input
            placeholder="Add company name"
            value={companyName}
            onChange={onChangeCompanyName}
          />
        </Form.Item>
        <Form.Item label="Phone (optional)">
          <Input value={phone} onChange={onChangePhone} />
        </Form.Item>
        <Form.Item label="Website (optional)">
          <Input placeholder="Add website" value={website} onChange={onChangeWebsite} />
        </Form.Item>
      </Form>
    </Card>
  )
}

SettingsSupplierCard.propTypes = {
  supplier: PropTypes.instanceOf(Object).isRequired,
  changeField: PropTypes.func.isRequired,
}

export default SettingsSupplierCard
