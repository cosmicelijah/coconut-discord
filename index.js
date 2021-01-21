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

client.login('ODAxNDM5MjI1MjY5NzE0OTc0.YAgscQ._XYp_6pbEA9AgCoGuSz2359CWUU');