import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'

import languageSelectors from '../store/selectors/language'
import setLanguage from '../store/actions/language'

const { Option } = Select

const LanguageSelect = () => {
  const dispatch = useDispatch()
  const changeLanguage = (newLanguage) => {
    dispatch(setLanguage(newLanguage))
  }
  const { language } = useSelector(languageSelectors.language)
  return (
    <Select
      defaultValue={language}
      onChange={changeLanguage}
      style={{ width: 90, marginRight: 10 }}
    >
      <Option value="english">english</Option>
      <Option value="russian">russian</Option>
    </Select>
  )
}

export default LanguageSelect
