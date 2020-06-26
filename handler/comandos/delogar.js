module.exports.info = {
    cmd: ['off', 'sair', 'deslogar', 'desligar']
}

module.exports.comando = (bot, msg, args) => {
	bot.logout()
}