import INTL_SET_LANGUAGE from '../types/language'

const setLanguage = (language) => ({
  type: INTL_SET_LANGUAGE,
  payload: { language },
})

export default setLanguage
