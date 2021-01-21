const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Coconut is ready to go!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'bruh'){
        client.commands.get('bruh').execute(message, args);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});

client.login('ODAxNDM5MjI1MjY5NzE0OTc0.YAgscQ._XYp_6pbEA9AgCoGuSz2359CWUU');