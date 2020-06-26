module.exports = async (bot, msg) => {
	
	bot.getChats().then(a => {
		var from = a.find(e => e.id._serialized === msg.from)
		var to = a.find(e => e.id._serialized === msg.to)
		
		console.log(`${config.tempo(msg.timestamp)} ~ [MSG][${from.name} -> ${to.name}]: ${msg.body}`)

	})
	
    let args = msg.body.slice(config.Prefixo.length).trim().split(/ +/g)
    let cmd = bot.commands.get(args.shift().toLowerCase())

    if (
        !cmd
        || !msg.body.startsWith(config.Prefixo)
    )
	return

	if (msg.body.startsWith(config.Prefixo)) return cmd.comando(bot, msg, args)
}