const Discord = require("discord.js")
module.exports = (client, message, args) => {
   if (!['322809311640289281', '414548693371453453'].includes(message.author.id)) {
      message.channel.send("Comando teniendo fallas tecnicas, como los streams de Thalas")
   } else {
      const embed = new Discord.MessageEmbed()
         .setTitle('Soy Thalas | Comandos Administrativos')
         .setAuthor(message.author.username, message.author.displayAvatarURL())
         .setColor(0xFFCC33)
         .setDescription('Estos son los comandos administrativos, los cuales solo pueden ser usados por Admins.')
         .addField('st!serverinfo', 'Muestra estadisticas acerca del servidor')
         .addField('st!userinfo', 'Muestra el avatar y el nombre del usuario mencionado, junto con sus roles y sanciones en el servidor')
         .addField('st!warn', 'Esto pondrá una sanción en el usuario mencionado junto a la razón de la misma')
         .addField('st!mute', 'Le pondrá el rol Muteado al usuario sancionado para que no pueda hablar en canales de texto y voz')
         .addField('st!kick', 'Expulsará al usuario mencionado del servidor, esto lo dejará entrar de nuevo cuando lo desee')
         .addField('st!tempban', 'Banneará al usuario del servidor de forma temporal, se tiene que especificar el tiempo del baneo')
         .addField('st!ban', 'Banneará al usuario mencionado por un tiempo indefinido hasta que se use el comando "unban"')
         .addField('st!unban', 'Le removerá el ban al usuario mencionado, dejandolo entrar nuevamente al servidor');
         message.channel.send(embed)
   }
}
/*eri gay :sunglasses::ok_hand:*/
//dejame usar el terminal pero no powershell
//como creo otro? solo me sale powershell, el cmd no
// https://img.monoverde.xyz/bkD3
//espera