const Discord = require("discord.js")
module.exports = (client, message, args) => { 
    if(!['322809311640289281', '414548693371453453'].includes(message.author.id))  {
    message.channel.send("Comando teniendo fallas tecnicas, como los streams de Thalas")
    } else {
    //#MonoesGay :D
     const embed = new Discord.MessageEmbed()
.setTitle('Comandos de Thalas Support')
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor(0xFFCC33)
.setDescription('👀 En desarrollo')
.setFooter('Si tienes dudas o sugerencias enviale un MD a DonWeon#1234');
message.channel.send(embed)
}}