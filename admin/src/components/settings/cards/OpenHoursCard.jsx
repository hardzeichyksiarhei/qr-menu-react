import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { Collapse } from 'antd'
import { ClockCircleTwoTone } from '@ant-design/icons'
import OpenHoursList from './OpenHoursList'

const { Panel } = Collapse

const OpenHoursCard = ({ openHours, onChangeTimeWindows }) => {
  const [localOpenHours, setLocalOpenHours] = useState(openHours)
  const intl = useIntl()

  const DAYS = {
    sun: intl.formatMessage({ id: 'Sunday' }),
    mon: intl.formatMessage({ id: 'Monday' }),
    tue: intl.formatMessage({ id: 'Tuesday' }),
    wed: intl.formatMessage({ id: 'Wednesday' }),
    thu: intl.formatMessage({ id: 'Thursday' }),
    fri: intl.formatMessage({ id: 'Friday' }),
    sat: intl.formatMessage({ id: 'Saturday' }),
  }

  const changeTimeWindows = (dayCode, array) => {
    setLocalOpenHours((prev) => {
      const newArr = [...prev]
      const arrItem = newArr.find((item) => item.dayCode === dayCode)
      arrItem.timeWindows = array
      return newArr
    })
    onChangeTimeWindows(localOpenHours)
  }

  const genExtra = (dayItem) =>
    dayItem.timeWindows.length ? (
      <ClockCircleTwoTone twoToneColor="#52c41a" />
    ) : (
      <ClockCircleTwoTone twoToneColor="#f7353adb" />
    )

  return (
    <Collapse accordion>
      {localOpenHours.map((dayItem) => (
        <Panel
          header={`${DAYS[dayItem.dayCode]} - ${
            dayItem.timeWindows.length
              ? dayItem.timeWindows.map((timeSlot) => ` ${timeSlot.start} - ${timeSlot.end}`)
              : 'CLOSED'
          }`}
          extra={genExtra(dayItem)}
          key={dayItem.dayCode}
        >
          <OpenHoursList
            dayItem={dayItem}
            key={dayItem.day}
            changeTimeWindows={changeTimeWindows}
          />
        </Panel>
      ))}
    </Collapse>
  )
}

OpenHoursCard.propTypes = {
  openHours: PropTypes.instanceOf(Array).isRequired,
  onChangeTimeWindows: PropTypes.instanceOf(Function).isRequired,
}

export default OpenHoursCard
