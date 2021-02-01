/* eslint-disable default-case */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { Card, Form, Input } from 'antd'
import translate from '../../../intl/translate'

import ImagesManagement from '../../images/ImagesManagement'
import OpenHoursCard from './OpenHoursCard'

const { TextArea } = Input

const SettingsSupplierCard = ({ supplier, changeField }) => {
  const [restaurantName, setRestaurantName] = useState(supplier.restaurantName)
  const [companyName, setCompanyName] = useState(supplier.companyName)
  const [messenger, setMessenger] = useState(supplier.messenger)
  const [phone, setPhone] = useState(supplier.phone)
  const [website, setWebsite] = useState(supplier.website)
  const [address, setAddress] = useState(supplier.address)
  const [descLong, setDescLong] = useState(supplier.descLong)
  const [descShort, setDescShort] = useState(supplier.descShort)
  const [logo] = useState(supplier.logo)
  const [backgroundImage] = useState(supplier.backgroundImage)
  const [googleMapsLink, setGoogleMapsLink] = useState(supplier.googleMapsLink)
  const [openHours] = useState(supplier.openHours)

  const intl = useIntl()

  const setField = (subField, value) => changeField('supplierSettings', subField, value)
  const fieldsSetter = (id, value) => {
    switch (id) {
      case 'restaurantName': {
        setRestaurantName(value)
        break
      }
      case 'companyName': {
        setCompanyName(value)
        break
      }
      case 'messenger': {
        setMessenger(value)
        break
      }
      case 'phone': {
        setPhone(value)
        break
      }
      case 'website': {
        setWebsite(value)
        break
      }
      case 'address': {
        setAddress(value)
        break
      }
      case 'googleMapsLink': {
        setGoogleMapsLink(value)
        break
      }
      case 'descShort': {
        setDescShort(value)
        break
      }
      case 'descLong': {
        setDescLong(value)
        break
      }
    }
  }
  const onChangeField = (e) => {
    const { id, value } = e.target
    fieldsSetter(id, value)
    setField(`${id}`, value)
  }

  const onChangeLogo = (changedLogo) => {
    setField('logo', changedLogo)
  }

  const onChangeBackgroundImage = (changedBackgroundImage) => {
    setField('background', changedBackgroundImage)
  }

  const onChangeTimeWindows = (changerOpenHours) => {
    setField('openHours', changerOpenHours)
  }

  return (
    <Card
      className="card-item card-shadow"
      title={<h3 className="mb-0">{translate('Supplier')}</h3>}
    >
      <Form name="supplier-form" layout="vertical">
        <Form.Item label="Logo">
          <ImagesManagement
            image={logo}
            onChange={onChangeLogo}
            previewSettings={{ width: 104, height: 104 }}
          />
        </Form.Item>
        <Form.Item label="Background">
          <ImagesManagement
            image={backgroundImage}
            onChange={onChangeBackgroundImage}
            previewSettings={{ width: 104, height: 104 }}
          />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'RestaurantName' })}
          rules={[{ required: true }]}
        >
          <Input
            id="restaurantName"
            placeholder={intl.formatMessage({ id: 'AddRestaurantName' })}
            value={restaurantName}
            onChange={onChangeField}
          />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'CompanyLegalName' })}>
          <Input
            id="companyName"
            placeholder={intl.formatMessage({ id: 'AddCompanyName' })}
            value={companyName}
            onChange={onChangeField}
          />
        </Form.Item>
        <Form.Item label="Restaurant Address">
          <Input id="address" placeholder="Add address" value={address} onChange={onChangeField} />
        </Form.Item>
        <Form.Item label="Maps Link (optional)">
          <Input
            id="googleMapsLink"
            placeholder="Add google maps link to your restaurant"
            value={googleMapsLink}
            onChange={onChangeField}
          />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'OptionalPhone' })}>
          <Input
            id="phone"
            placeholder={intl.formatMessage({ id: 'AddPhone' })}
            value={phone}
            onChange={onChangeField}
          />
        </Form.Item>
        <Form.Item label="Messenger (optional)">
          <Input
            id="messenger"
            placeholder="Add messenger number"
            value={messenger}
            onChange={onChangeField}
          />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'OptionalWebsite' })}>
          <Input
            id="website"
            placeholder={intl.formatMessage({ id: 'AddWebsite' })}
            value={website}
            onChange={onChangeField}
          />
        </Form.Item>
        <Form.Item label="Short Description (optional)">
          <TextArea
            id="descShort"
            placeholder="Add short description"
            value={descShort}
            onChange={onChangeField}
            autoSize
          />
        </Form.Item>
        <Form.Item label="Full Description (optional)">
          <TextArea
            id="descLong"
            placeholder="Add a detailed description"
            value={descLong}
            onChange={onChangeField}
            autoSize
          />
        </Form.Item>
        <Form.Item label="Opening Hours">
          <OpenHoursCard openHours={openHours} onChangeTimeWindows={onChangeTimeWindows} />
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
