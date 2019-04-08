const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === 'c!ping') {
		message.channel.send('Pong.');
	}
});

client.login(process.env.token);
