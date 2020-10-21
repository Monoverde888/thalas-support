const ch = require("child_process");
const exec = require("util").promisify(ch.exec);
const { Util } = require("discord.js");
const Discord = require("discord.js")
module.exports = async (client, message, args) => {
    if(!['322809311640289281', '414548693371453453'].includes(message.author.id)) return message.channel.send('No tienes permiso para usar este comando!') && console.log(`${message.author.tag} quizo hacer ${client.config.prefix}eval`)
    if(!args[0]) retu
    try {
        const { stdout, stderr } = await exec(args.slice(0).join(" "));
        if (!stdout && !stderr) return message.channel.send("Command executed, but no output");
        if(stdout) {
            const text = Util.splitMessage(stdout, {maxLength: 1950});
            await message.channel.send(text[0], { code: "sh" });
            console.log(text[0])
        }
        if(stderr) {
            const text = Util.splitMessage(stderr, {maxLength: 1950});
            await message.channel.send(text[0], { code: "sh" });
            console.log(text[0])
        }
    } catch (error) {
        const text = Util.splitMessage(error.toString(), {maxLength: 1950});
        await message.channel.send(text[0], { code: "sh" });
    }

}