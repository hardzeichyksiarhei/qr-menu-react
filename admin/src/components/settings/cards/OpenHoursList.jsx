/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'antd'
import { SaveFilled } from '@ant-design/icons'

import TimeSlotCard from './TimeSlotCard'

const OpenHoursList = ({ dayItem, changeTimeWindows }) => {
  const { dayCode } = dayItem
  const [timeWindows, setTimeWindows] = useState(dayItem.timeWindows)
  const [id, setId] = useState(0)

  const addTimeSlot = () => {
    const timeSlot = {
      id,
      start: '00:00',
      end: '00:15',
    }
    setId((prev) => prev + 1)
    setTimeWindows((prev) => [...prev, timeSlot])
  }

  const changeTimeSlot = (slotId, field, value) => {
    setTimeWindows((prev) => {
      const newArr = [...prev]
      const changeItem = newArr.find((item) => item.id === slotId)
      changeItem[field] = value
      return newArr
    })
  }

  const deleteTimeSlot = (slotId) => {
    setTimeWindows((prev) => {
      const newArr = prev.filter((item) => item.id !== slotId)
      return newArr
    })
  }

  const saveTimeSlots = () => {
    changeTimeWindows(dayCode, timeWindows)
  }

  return (
    <>
      {timeWindows.length
        ? timeWindows.map((slot, idx) => (
            <Card key={idx}>
              <TimeSlotCard
                slot={slot}
                key={slot.id}
                deleteTimeSlot={deleteTimeSlot}
                changeTimeSlot={changeTimeSlot}
              />
            </Card>
          ))
        : null}
      <>
        <Button type="dashed" onClick={addTimeSlot}>
          + Add new time slot
        </Button>
        <Button icon={<SaveFilled />} type="primary" onClick={saveTimeSlots}>
          Save
        </Button>
      </>
    </>
  )
}

OpenHoursList.propTypes = {
  dayItem: PropTypes.instanceOf(Object).isRequired,
  changeTimeWindows: PropTypes.instanceOf(Function).isRequired,
}

export default OpenHoursList
