const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("DND Bot On!");
});
client.on("message", (message) => {
  if (message.content.startsWith("$studdymodeoff")) {
    let role = message.guild.roles.find("527684778653253642")
    let member = message.author.id
    member.removeRole("527684778653253642").catch(console.error)
  }else
  if (message.content.startsWith("$studymodeon")) {
    let role = message.guild.roles.find("527684778653253642")
    let member = message.author.id
    member.addRole("527684778653253642").catch(console.error)
  }
  });
client.login(process.env.BOT_TOKEN)
