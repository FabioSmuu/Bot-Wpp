const qrcode = require('qrcode-terminal')

module.exports = async (bot, qr) => {
    qrcode.generate(qr, { small: true })
}