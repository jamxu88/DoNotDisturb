const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("DND Bot On!");
});
client.on("message", (message) => {
  if (message.content.startsWith("!dndoff")) {
    let role = message.guild.roles.find(role => role.name === "NoDisturb");
    let member = message.author.id
    member.removeRole(role).catch(console.error)
  }else
  if (message.content.startsWith("!dndon")) {
    let role = message.guild.roles.find(role => role.name === "NoDisturb");
    let member = message.author.id
    member.addRole(role).catch(console.error)
  }
  });
client.login(process.env.BOT_TOKEN)
