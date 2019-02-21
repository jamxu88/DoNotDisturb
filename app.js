const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("DND Bot On!");
});
client.on("message", (message) => {
  if (message.content.startsWith("!dndoff")) {
    let role = message.guild.roles.find(role => role.name === "NoDisturb");
    let member = message.member
    member.removeRole(role).catch(console.error);
    message.delete();
  }else
  if (message.content.startsWith("!dndon")) {
    let role = message.guild.roles.find(role => role.name === "NoDisturb");
    let member = message.member
    member.addRole(role).catch(console.error);
  }else
  if (message.channel.id === "545076810036281354") {
    message.delete();
  }else
  if (message.content.startsWith("i need to work")) {
    let role = message.guild.roles.find(role => role.name === "NoDisturb");
    let member = message.member
    member.addRole(role).catch(console.error);
    message.delete();
  }
});
client.login(process.env.BOT_TOKEN)
