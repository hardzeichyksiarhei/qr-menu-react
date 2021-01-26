const QRCode = require('qrcode')
const { PassThrough } = require('stream')

const catchErrors = require('../../helpers/catchErrors')

const { CLIENT_URL } = require('../../helpers/config')

module.exports.getByUserId = catchErrors(async (req, res) => {
  const { userId } = req.params
  const { mode } = req.query

  const qrStream = new PassThrough()
  await QRCode.toFileStream(qrStream, `${CLIENT_URL}/${userId}`, {
    type: 'png',
    width: 240,
    errorCorrectionLevel: 'H',
  })

  if (mode === 'save') {
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'content-disposition': 'attachment; filename="qr-code.png"',
    })
  }

  return qrStream.pipe(res)
})
