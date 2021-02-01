import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Collapse } from 'antd'
import OpenHoursList from './OpenHoursList'

const { Panel } = Collapse

const OpenHoursCard = ({ openHours, onChangeTimeWindows }) => {
  const [localOpenHours, setLocalOpenHours] = useState(openHours)

  const DAYS = {
    sun: 'Sunday',
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
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

  return (
    <Collapse bordered={false} accordion>
      {localOpenHours.map((dayItem) => (
        <Panel
          header={`${DAYS[dayItem.dayCode]} - ${dayItem.timeWindows.length ? 'OPEN' : 'CLOSE'}`}
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
