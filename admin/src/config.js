module.exports = {
  API_URL: process.env.REACT_APP_API_URL,
  SERVER_URL: process.env.REACT_APP_SERVER_URL,

  CLIENT_URL: process.env.REACT_APP_CLIENT_URL,

  UI_LANGUAGES: [
    {
      code: 'en',
      label: 'English',
    },
    {
      code: 'ru',
      label: 'Русский',
    },
  ],

  CURRENCIES: {
    BYN: 'BYN',
    USD: '$',
    EUR: '€',
    CZK: 'Kč',
  },
}
