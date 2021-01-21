const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

client.once('ready', () => {
    console.log('Coconut is ready to go!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('no');
    } else if (command === 'bruh'){
        message.channel.send('moment')
    }
});

client.login('process.env.TOKEN');