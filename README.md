# Repositorio de Bot para Whatsapp usando a API [whatsapp-web.js](https://pedroslopez.me/whatsapp-web.js/).

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/Snooh)

> **Aviso**: Este bot tem como intuito, conectar ao discord atraves de um qrcode gerado pelo console.

> Quero deixar claro quer "O uso deste estudo de forma indevida em sua parte, não serão de minha autoria/responsabilidade".


### Informaões:
 Este projeto foi criado em nodejs usando algumas dependencias.
 | Dependencia | Como Instalar |
| - | - |
| whatsapp-web.js | npm i whatsapp-web.js
|QrCode Terminal | npm i qrcode-terminal|


### Este bot conte:
- Base para a criação de comandos.
- Armazenamento de sesão (só precisará lero QrCode uma unica vez).
- Identificador de contatos salvos.
- Leitura e escrita de mensagens.
- Leito ACK para mensagens enviadas.
- Todos os eventos separados na handler.


### Como criar um comando:
Seguindo o exemplo do arquivo [comando.js](/handler/comandos/exemplo/comando.js) podemos ver como um comando é criado.

```js
module.exports.info = {
    cmd: ['exemplo', 'e'] //Irá funcionar usando prefixo + nome  (!exemplo ou !e)
}

module.exports.comando = (bot, msg, args) => {
    //Aqui é onde ocorre a magica, pois, tudo o que for criado neste bloco será executado ao chamar o comando.
}
```

![N|Solid](https://cdn.discordapp.com/attachments/539435716011360286/725946860878954547/unknown.png)



**Obrigado pela sua atenção!**
	
