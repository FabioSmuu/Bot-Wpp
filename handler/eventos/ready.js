module.exports = async bot => {
	config.tempo = function (UNIX_timestamp){
		let a = new Date(UNIX_timestamp * 1000)
		//let months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
		let year = a.getFullYear()
		//let month = months[a.getMonth()]
		let month = '0' + a.getMonth()
		let date = '0' + a.getDate()
		let hour = '0' + a.getHours()
		let min = '0' + a.getMinutes()
		let sec = '0' + a.getSeconds()
		let time = date.substr(-2) + '/' + month.substr(-2) + '/' + year + ' ' + hour.substr(-2) + ':' + min.substr(-2) + ':' + sec.substr(-2)
		return time
	}
    console.log('\n' + bot.info.pushname + ' Conectado!\n\r')
}