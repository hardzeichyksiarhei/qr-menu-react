import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { Card, Form, Input } from 'antd'
import translate from '../../../intl/translate'

const SettingsSupplierCard = ({ supplier, changeField }) => {
  const [restaurantName, setRestaurantName] = useState(supplier.restaurantName)
  const [companyName, setCompanyName] = useState(supplier.companyName)
  const [phone, setPhone] = useState(supplier.phone)
  const [website, setWebsite] = useState(supplier.website)

  const intl = useIntl()

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
    <Card
      className="card-item card-shadow"
      title={<h2 className="mb-0">{translate('Supplier')}</h2>}
    >
      <Form name="supplier-form" layout="vertical">
        <Form.Item
          label={intl.formatMessage({ id: 'RestaurantName' })}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={intl.formatMessage({ id: 'AddRestaurantName' })}
            value={restaurantName}
            onChange={onChangeRestaurantName}
          />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'CompanyLegalName' })}>
          <Input
            placeholder={intl.formatMessage({ id: 'AddCompanyName' })}
            value={companyName}
            onChange={onChangeCompanyName}
          />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'OptionalPhone' })}>
          <Input
            placeholder={intl.formatMessage({ id: 'AddPhone' })}
            value={phone}
            onChange={onChangePhone}
          />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'OptionalWebsite' })}>
          <Input
            placeholder={intl.formatMessage({ id: 'AddWebsite' })}
            value={website}
            onChange={onChangeWebsite}
          />
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
