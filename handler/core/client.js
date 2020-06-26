const { Client } = require('whatsapp-web.js'),
qrcode = require('qrcode-terminal'),
fs = require('fs'),
util = require("util"),
path = require('path'),

//sesjson
sesjson = path.resolve(__dirname, 'session.json'),
sesdata = fs.existsSync(sesjson) ? require(sesjson) : null

const client = new Client({
  session: sesdata,
})

client.on("authenticated", (session) => {
	fs.writeFile(sesjson, JSON.stringify(session), (err) => {
		if (err) console.log(err)
	})
})

client.on("auth_failure", () => {
	fs.unlink(sesjson, () => console.log("Erro na autenticação do whatsapp."))
})

client.on("disconnected", () => {
	fs.unlink(sesjson, () => console.log("Perca de conexão com o whatsapp."))
})
//sesjson

////cmd
function readDir(dir){
	let files = {}

	fs.readdirSync(dir)
	.sort((a, b) => fs.statSync(dir + '/' + a).mtime.getTime() - fs.statSync(dir + '/' + b).mtime.getTime())
	.forEach(file => {
		if( fs.lstatSync(dir+ '/' +file).isFile() ){
			if (file.endsWith('.js')) {
				console.log('- ' + file + ' OK!')
				let comandos = require(dir + '/'+file)
				comandos.info.cmd.map(e => client.commands.set(e, comandos))
			}
		}
		else if(fs.lstatSync(dir+ '/' +file).isDirectory()) files[file] = readDir(dir+ '/' +file)
	})
}

client.commands = new Map()
//client.commands = new Collection()
readDir(path.join(__dirname, '/../comandos/'))
////cmd

////evt
let files = fs.readdirSync(path.join(__dirname, '/../eventos/'))
files.map(f => {
	if (f.endsWith('.js')) client.on(f.slice(0, -3), require(path.join(__dirname, '/../eventos/')+f).bind(null, client))
})
////evt

client.initialize()