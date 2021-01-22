const Discord = require('discord.js')
const config = require('/app/config.json')
const status = require('/app/status.json')
const fs = require('fs')
let prefix = config.prefix
const client = new Discord.Client({disableEveryone: true});

client.login(config.token);

client.commands = new Discord.Collection();

//client.events = new Discord.Collection();

['command_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once("ready", () => {
    console.log('Coconut is ready!');
    client.user.setPresence({
        status: status.active,
        game: {
            name: status.activity,
            type: status.activityType
        }
    });
});

client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
    
    if (command) command.execute(client, message, args, Discord);
});