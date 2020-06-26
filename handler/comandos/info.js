module.exports.info = {
    cmd: ['info']
}

module.exports.comando = (bot, msg, args) => {
	console.log(bot)
	bot.getChats().then(e => {console.log(e)})
}