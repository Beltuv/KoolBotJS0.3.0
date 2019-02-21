const commando = require("discord.js-commando");
const bot = new commando.Client();

bot.registry.registerGroup('simple')
bot.registry.registerGroup('random');
bot.registry.registerGroup('greetings');
bot.registry.registerGroup('imagecommands');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.on('ready', () => {
    bot.user.setActivity("Club Penguin");
  });

bot.login("NTQ3ODA5MzczNzA4MzUzNTU3.D1BxPQ.i1tX8KcL16wUy-_zq4JlhD6EOLM") //TOKEN
