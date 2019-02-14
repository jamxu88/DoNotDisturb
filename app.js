const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("DND Bot On!");
});
client.on('messageReactionAdd', (reaction, user, message) => {
  if(reaction.message.id === "545430535871266817" || reaction.emoji.name === "🚫") {
    let role = reaction.guild.roles.find(role => role.name === "NoDisturb");
    let member = reaction.member
    member.removeRole(role).catch(console.error)
  }
});
client.on('messageReactionAdd', (reaction, user, message) => {
  if (reaction.message.id === "545430535871266817" || reaction.emoji.name === "✅") {
    let role = message.guild.roles.find(role => role.name === "NoDisturb");
    let member = message.member
    member.addRole(role).catch(console.error)
  }
});
client.login(process.env.BOT_TOKEN)
