const commando = require("discord.js-commando");
const bot = new commando.Client();
const TOKEN = process.env.token

bot.registry.registerGroup('simple')
bot.registry.registerGroup('random');
bot.registry.registerGroup('greetings');
bot.registry.registerGroup('imagecommands');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.on('ready', () => {
    bot.user.setActivity("Club Penguin");
  });

bot.login(TOKEN) //TOKEN
