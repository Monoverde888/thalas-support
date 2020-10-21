const Discord = require("discord.js")
  let pe = "#ThalasCalvo"
  module.exports = async (client, message, args) => {
    if(args[0] == "client.config.token") return message.channel.send("no");
    if(args[0] == "client.config") return message.channel.send("no");
    if(!['322809311640289281', '414548693371453453'].includes(message.author.id)) return message.channel.send('No tienes permiso para usar este comando!') && console.log(`${message.author.tag} quizo hacer ${client.config.prefix}eval`)
    if (!args[0]) return message.channel.send("Pon algo a evaluar");
    let limit = 1005;
    let code = args.slice(0).join(' ');
    try {
      let evalued = await eval(code);
      if (typeof evalued !== "string")
        evalued = require("util").inspect(evalued, {
          depth: 0
        });
      let txt = "" + evalued;
      if(txt.includes(client.config.token)) return message.channel.send("gil ahi esta tu token")
      if (txt.length > limit) {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Evaluation done!", client.user.displayAvatarURL())
          .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
          .addField("Output", `\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``)
          .setColor("RANDOM")
          .setFooter("Requested by: " + message.author.tag)
        message.channel.send(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setAuthor("Evaluation done!", client.user.displayAvatarURL())
          .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
          .addField("Output", `\`\`\`js\n ${txt}\n\`\`\``)
          .setColor("RANDOM")
          .setFooter("Requested by: " + message.author.tag)
        message.channel.send(embed);
      }
    } catch (err) {
      const embed = new Discord.MessageEmbed()
        .setAuthor("Something happened!", client.user.displayAvatarURL())
        .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
        .addField("Output", `\`\`\`js\n${err}\n\`\`\``)
        .setColor("RANDOM")
        .setFooter("Requested by: " + message.author.tag)
      message.channel.send(embed);
    }
  }