const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "j!"

client.on("ready", function() { 
        client.user.setActivity("%help for commands") 
    console.log("Booted up!"); 
});

client.on("message", (message) => {
  if(message.content.startsWith(PREFIX + "ping")){
        message.channel.send("PONG!");
  }});

client.login(process.env.token);
