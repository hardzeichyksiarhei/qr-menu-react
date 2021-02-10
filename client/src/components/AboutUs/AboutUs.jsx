/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from 'react-use'

import { Image, Spin, List, Divider } from 'antd'
import { SERVER_URL } from '../../config'

import settingsService from '../../services/settings'
import './AboutUs.scss'

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

    if (!settings) {
        return (
          <div>
            <Spin size="large" />
          </div>
        )
    }

    return (
        <div className="about-us-container">
            {settings.backgroundImage ? <Image preview={false} src={`${SERVER_URL}/uploads/${userId}/medium/${settings.backgroundImage.sizes.medium}`} alt="background" /> : null}
            <h1>{settings.restaurantName}</h1>
            <h5>{settings.companyName}</h5>
            <List
                size="small"
                header={<div>Opening Hours</div>}
                bordered
                dataSource={settings.openHours}
                renderItem={item => <List.Item>
                    {`${DAYS[item.dayCode]} • ${
                        item.timeWindows.length
                            ? item.timeWindows.map((timeSlot) => ` ${timeSlot.start} - ${timeSlot.end}`)
                            : 'CLOSED'}`
                    }</List.Item>}
            />
            {settings.descLong || settings.website ? <Divider>{`About ${settings.restaurantName}`}</Divider> : null}
            <article>
                {settings.descLong}
            </article>
            {settings.website ? <p>{`Find out more about ${settings.restaurantName} on the `}<a href={settings.website}>website</a></p> : null}
            {settings.phone || settings.messenger || settings.address || settings.googleMapsLink ? <Divider>Contact Us</Divider> : null}
            {settings.phone ? <p>Phone: <a href={`tel:${settings.phone}`}>{settings.phone}</a></p> : null}
            {settings.messenger ? <p>Messenger: <a href={`${settings.messenger}`}>{settings.messenger}</a></p>: null}
            {settings.address ? <p>{`Address: ${settings.address}`}</p> : null}
            {settings.googleMapsLink ? <a href={settings.googleMapsLink}>Maps Link</a> : null}
        </div>
    )
}

export default AboutUs
