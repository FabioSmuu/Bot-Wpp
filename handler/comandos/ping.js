module.exports.info = {
    cmd: ['ping', 'p']
}

module.exports.comando = (bot, msg, args) => {
	console.log(msg)
	msg.reply('pong')
}