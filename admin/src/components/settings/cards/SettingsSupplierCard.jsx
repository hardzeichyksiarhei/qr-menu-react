/* eslint-disable default-case */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { Card, Form, Input, Row, Col, Popover, Image } from 'antd'
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
    setField('backgroundImage', changedBackgroundImage)
  }

  const onChangeTimeWindows = (changerOpenHours) => {
    setField('openHours', changerOpenHours)
  }

  const hint = () => (
    <div className="map-hint">
      <a href="https://yandex.ru/map-constructor/">{translate('LinkToConstructor')}</a>
      <Image width={150} src="./hint.png" alt="hint" />
    </div>
  )

  return (
    <Card
      className="supplier-settings-card"
      title={<h3 className="mb-0">{translate('SupplierSettings')}</h3>}
    >
      <Form name="supplier-form" layout="vertical">
        <Row gutter={20}>
          <Col span={24} xxl={12}>
            <Row gutter={20}>
              <Col>
                <Form.Item label={intl.formatMessage({ id: 'Logo' })}>
                  <ImagesManagement
                    image={logo}
                    onChange={onChangeLogo}
                    previewSettings={{ width: 104, height: 104 }}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label={intl.formatMessage({ id: 'Background' })}>
                  <ImagesManagement
                    image={backgroundImage}
                    onChange={onChangeBackgroundImage}
                    previewSettings={{ width: 104, height: 104 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24} md={12}>
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
              </Col>
              <Col span={24} md={12}>
                <Form.Item label={intl.formatMessage({ id: 'CompanyLegalName' })}>
                  <Input
                    id="companyName"
                    placeholder={intl.formatMessage({ id: 'AddCompanyName' })}
                    value={companyName}
                    onChange={onChangeField}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24} md={12}>
                <Form.Item label={intl.formatMessage({ id: 'RestaurantAddress' })}>
                  <Input
                    id="address"
                    placeholder={intl.formatMessage({ id: 'AddRestaurantAddress' })}
                    value={address}
                    onChange={onChangeField}
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Popover content={hint} title={intl.formatMessage({ id: 'Hint' })}>
                  <Form.Item label={intl.formatMessage({ id: 'MapsLink' })}>
                    <Input
                      id="googleMapsLink"
                      placeholder={intl.formatMessage({ id: 'AddMaps' })}
                      value={googleMapsLink}
                      onChange={onChangeField}
                    />
                  </Form.Item>
                </Popover>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24} md={12}>
                <Form.Item label={intl.formatMessage({ id: 'OptionalPhone' })}>
                  <Input
                    id="phone"
                    placeholder={intl.formatMessage({ id: 'AddPhone' })}
                    value={phone}
                    onChange={onChangeField}
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Form.Item label={intl.formatMessage({ id: 'Messenger' })}>
                  <Input
                    id="messenger"
                    placeholder={intl.formatMessage({ id: 'AddMessengerNumber' })}
                    value={messenger}
                    onChange={onChangeField}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label={intl.formatMessage({ id: 'OptionalWebsite' })}>
              <Input
                id="website"
                placeholder={intl.formatMessage({ id: 'AddWebsite' })}
                value={website}
                onChange={onChangeField}
              />
            </Form.Item>
            <Form.Item label={intl.formatMessage({ id: 'ShortDescription' })}>
              <TextArea
                id="descShort"
                placeholder={intl.formatMessage({ id: 'AddShortDescription' })}
                value={descShort}
                onChange={onChangeField}
                autoSize
              />
            </Form.Item>
            <Form.Item label={intl.formatMessage({ id: 'FullDescription' })}>
              <TextArea
                id="descLong"
                placeholder={intl.formatMessage({ id: 'AddDetailedDescription' })}
                value={descLong}
                onChange={onChangeField}
                autoSize
              />
            </Form.Item>
          </Col>
          <Col span={24} xxl={12}>
            <Form.Item label={intl.formatMessage({ id: 'OpeningHours' })}>
              <OpenHoursCard openHours={openHours} onChangeTimeWindows={onChangeTimeWindows} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

SettingsSupplierCard.propTypes = {
  supplier: PropTypes.instanceOf(Object).isRequired,
  changeField: PropTypes.func.isRequired,
}

export default SettingsSupplierCard
