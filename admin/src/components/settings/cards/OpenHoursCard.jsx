import React from 'react'
import PropTypes from 'prop-types'

const OpenHoursCard = ({ day }) => {
  console.log(day)

  const DAYS = {
    sun: 'Sunday',
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
  }

  return <h1>{DAYS[day.dayCode]}</h1>
}

OpenHoursCard.propTypes = {
  day: PropTypes.instanceOf(Object).isRequired,
}

export default OpenHoursCard
