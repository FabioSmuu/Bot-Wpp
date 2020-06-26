module.exports.info = {
    cmd: ['msg']
}

module.exports.comando = (bot, msg, args) => {
	if (msg.id.fromMe) return
	msg.reply(args.join(' '))
}