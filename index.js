const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === 'c!about') {
		message.channel.send('This Bot Was For Coding Lounge And Will Be Helping U With Ur Coding.         Thank For Choosing Coding Bot#4060 Have A Nice Day');
	}
});

client.login(process.env.token);
