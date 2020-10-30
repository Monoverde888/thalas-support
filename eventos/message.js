const Discord = require("discord.js")
module.exports = (client, message) => {
  if (message.channel.type == "dm") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Nuevo DM!")
      .setThumbnail(message.author.avatarURL())
      .setColor("RANDOM")
      .addField("Contenido:", message.content, true)
      .addField("Autor:", message.author.tag, true)
      .addField("ID:", message.author.id, true)
    return client.channels.cache.get("738032942776975370").send(embed) && message.channel.send("Gracias por tu mensaje pero esta no es una forma de contactar al staff o a thalas, si quieres contactarlos mandale un mensaje a  Monoverde \🎃#8888 o DonWeon#1234")
  }
  if (!message.content.startsWith(client.config.prefix)) return;
  if (message.author.bot) return;

  // Definiendo los argumentos y comandos.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()

  // Manejando los eventos.
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if (!cmd) return; 

  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
  cmd(client, message, args);


}
