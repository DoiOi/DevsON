const discord = require("discord.js");
const bot = new discord.Client();

bot.login("NzI2NzQ0OTEwNzc4MDczMDg5.XvhwKw.I0zkmGj5ygu6yiMMFLcI5oroMXc");

bot.on("ready", () => {
  console.log(bot.user.tag + " is online");
  bot.user.setActivity(` PotatoDLL `, { type: "making" });
});