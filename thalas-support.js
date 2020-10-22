const Discord = require('discord.js');
const client = new Discord.Client();
let { readdirSync } = require('fs');


process.on('SIGTERM', () => {
  client.destroy(() => {
    console.log('Process terminated')
  })
})


client.config = require('./config.js');

client.comandos = new Discord.Collection();



for (const file of readdirSync('./comandos/')) {


  if (file.endsWith(".js")) {


    let fileName = file.substring(0, file.length - 3);


    let fileContents = require(`./comandos/${file}`);

    client.comandos.set(fileName, fileContents);
  }
}


for (const file of readdirSync('./eventos/')) {


  if (file.endsWith(".js")) {


    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./eventos/${file}`);

    client.on(fileName, fileContents.bind(null, client));


    delete require.cache[require.resolve(`./eventos/${file}`)];
  }
}


client.login(client.config.token)
  .then(() => {
    console.log(`Thalas es calvo o yo no me llamo ${client.user.tag}`);
    client.user.setPresence({
      status: "idle",
      activity: {
        name: `en desarrollo 👀 || twitch.tv/soythalas`,
        type: "WATCHING"
      }
    })
  })
  .catch((err) => {


    console.error("Error al iniciar sesión: " + err);

  });


//si