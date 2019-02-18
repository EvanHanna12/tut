const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "%"

lient.on("ready", function() { 
        bot.user.setActivity("%help for commands") 
    console.log("Booted up!"); 
});

client.on("message", (message) => {
  if(message.content.startsWith(PREFIX + "ping")){
        message.channel.send("PONG!");
});

client.login("NTM4MTM4NDMwMjE1OTQ2MjU3.D0yOGg.y0c8JIxsHqPHmHPrL15AR0HFoPE");
