/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TimePicker, Button } from 'antd'
import { DeleteFilled } from '@ant-design/icons'
import moment from 'moment'

const TimeSlotCard = ({ slot, deleteTimeSlot, changeTimeSlot }) => {
  const [localSlot] = useState(slot)

  const selectTime = (e) => {
    const str = e._d.toString()
    const res = str.match(/\d\d:\d\d/g)
    return res[0]
  }

  const onChangeStart = (e) => {
    const start = e ? selectTime(e) : '00:00'
    changeTimeSlot(localSlot.id, 'start', start)
  }

  const onChangeEnd = (e) => {
    const end = e ? selectTime(e) : '00:00'
    changeTimeSlot(localSlot.id, 'end', end)
  }

  const onDeleteTimeSlot = () => {
    deleteTimeSlot(localSlot.id)
  }

  return (
    <>
      <span>Start work</span>
      <TimePicker
        defaultValue={moment(localSlot.start, 'HH:mm')}
        format="HH:mm"
        minuteStep={15}
        onChange={onChangeStart}
      />
      <span>End work</span>
      <TimePicker
        defaultValue={moment(localSlot.end, 'HH:mm')}
        format="HH:mm"
        minuteStep={15}
        onChange={onChangeEnd}
      />
      <Button icon={<DeleteFilled />} type="danger" onClick={onDeleteTimeSlot} />
    </>
  )
}

TimeSlotCard.propTypes = {
  slot: PropTypes.instanceOf(Object).isRequired,
  deleteTimeSlot: PropTypes.instanceOf(Function).isRequired,
  changeTimeSlot: PropTypes.instanceOf(Function).isRequired,
}

export default TimeSlotCard
