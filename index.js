const Discord = require('discord.js')
const config = require('./config.json')
const status = require('./status.json')

const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});
client.login(config.token);

client.commands = new Discord.Collection();

//client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.on("ready", async() => {

console.log('Coconut is ready!');

    client.user.setPresence({
        status: status.active,
        game: {
            name: status.activity,
            type: status.activityType
        }
    });
});

if(!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const cmd = args.shift().toLowerCase();

const command = client.commands.get(cmd);

if(command) command.execute(client, message, args, Discord);