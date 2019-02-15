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

bot.login("NTQ0NzI0MzgzNjcxNzc5MzU4.D0ZKvg.xf4RLQTd_lhhbqiNd5l8xSm8CTk") //TOKEN