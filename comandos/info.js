const Discord = require(`discord.js`)
module.exports = async (client, message) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("SoyThalas | Información")
        .setDescription("Hola!! Yo soy `ThalasSupport#0362`, fui creado por `DonWeon#1234` y `Monoverde#8888`para ayudar a los miembros del servidor de **SoyThalas**. Puedes ver todos mis comandos usando `st!help` ")
        .setThumbnail("https://cdn.discordapp.com/avatars/765944857746997268/faa316ea6865a2d57494776ebf4f0c07.png?size=256")
        .setColor("FFCC33")

    await message.channel.send(embed)

}