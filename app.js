const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  if (message.member.roles.some(r=>["DND"].includes(r.name))) {
    message.delete(10)
    message.author.send("Hey, you're currently on Study Mode. To turn this off, just write `$studymodeoff` in the general chat. Thank you for being a good student!")
  }else
  if (message.mentions.users.first()) {
    if (message.mentions.users.find("527684782587510815")) {
      message.delete(10)
      message.author.send("Hey, this person is currently in Study Mode.")
      }
  }else
  if (message.content.startsWith("$studdymodeoff")) {
    let role = message.guild.roles.find("527684782587510815")
    let member = message.author.id
    member.removeRole("527684782587510815").catch(console.error)
  }else
  if (message.content.startsWith("$studymodeon")) {
    let role = message.guild.roles.find("527684782587510815")
    let member = message.author.id
    member.addRole("527684782587510815").catch(console.error)
  }
  });
client.login(process.env.BOT_TOKEN)
