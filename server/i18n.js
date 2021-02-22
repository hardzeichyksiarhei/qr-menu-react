const path = require('path')
const { I18n } = require('i18n')

const i18n = new I18n({
  locales: ['en', 'ru'],
  directory: path.join(__dirname, 'locales'),
  objectNotation: true,
  header: 'language-code',
})

module.exports = i18n
