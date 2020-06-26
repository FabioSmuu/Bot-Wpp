module.exports = async (bot, msg, ack) => {
	let retorno = (ack == 3) ? 'Visualizada' : (ack == 2) ? 'Recebida' : 'Enviada'
	console.log(`${config.tempo(msg.timestamp)} ~ [ACK][${retorno}]: ${msg.body}`)
}