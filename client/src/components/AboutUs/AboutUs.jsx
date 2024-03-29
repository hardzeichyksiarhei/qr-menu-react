/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from 'react-use'

import { Image, Spin, Divider, Timeline, Typography } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

import { SERVER_URL } from '../../config'

import settingsService from '../../services/settings'

import './AboutUs.scss'

const { Title } = Typography

const AboutUs = () => {
  const DAYS = {
    sun: 'Sunday',
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
  }

  const [settings, setSettings] = useState(null)
  const { userId } = useParams()
  useAsync(async () => {
    const settingsResponse = await settingsService.getFieldsSettings(userId, ['supplierSettings'])
    const { supplierSettings } = settingsResponse
    setSettings(supplierSettings)
  })

  useEffect(() => {
    if (settings && settings.googleMapsLink) {
      const script = document.createElement('script')

      script.src = settings.googleMapsLink
      script.async = true

      document.getElementById('map').appendChild(script)
    }
  }, [settings])

  if (!settings) {
    return (
      <div className="content-loading">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <div className="about-us">
      <div className="about-us-main">
        <Title level={5}>{settings.companyName}</Title>
        <Title>{settings.restaurantName}</Title>
      </div>
      {settings.backgroundImage ? (
        <div className="about-us-image">
          <Image
            src={`${SERVER_URL}/uploads/${userId}/large/${settings.backgroundImage.sizes.large}`}
            fallback="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="background"
            preview={false}
          />
        </div>
      ) : null}
      <div className="about-us-grid">
        <div className="about-us-info">
          {settings.descLong || settings.website ? (
            <>
              <Divider orientation="left" dashed>{`About ${settings.restaurantName}`}</Divider>
              <article>{settings.descLong}</article>
              {settings.website ? (
                <p>
                  {`Find out more about ${settings.restaurantName} on the `}
                  <a href={settings.website}>website</a>
                </p>
              ) : null}
            </>
          ) : null}
          {settings.phone || settings.messenger || settings.address ? (
            <>
              <Divider orientation="left" dashed>
                Contact Us
              </Divider>
              {settings.phone ? (
                <p>
                  Phone: <a href={`tel:${settings.phone}`}>{settings.phone}</a>
                </p>
              ) : null}
              {settings.messenger ? (
                <p>
                  Messenger: <a href={`${settings.messenger}`}>{settings.messenger}</a>
                </p>
              ) : null}
              {settings.address ? <p>{`Address: ${settings.address}`}</p> : null}
            </>
          ) : null}
        </div>
        <div className="about-us-open-hours">
          <Divider dashed>Opening Hours</Divider>
          <Timeline mode="left">
            {settings.openHours.map((item) => (
              <Timeline.Item
                label={DAYS[item.dayCode]}
                key={item.dayCode}
                dot={<ClockCircleOutlined className="timeline-clock-icon" />}
                color={!item.timeWindows.length ? 'red' : 'green'}
              >
                {item.timeWindows.length
                  ? item.timeWindows.map((timeSlot) => ` ${timeSlot.start} - ${timeSlot.end}`)
                  : 'CLOSED'}
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
        <div className="about-us-map">
          {settings.googleMapsLink ? (
            <>
              <Divider dashed>Maps</Divider>
              <div id="map" />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
