const Discord = require('discord.js')
const config = require('./config.json')
const status = require('./status.json')

const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});
client.login(config.token);

client.commands = new Discord.Collection();

client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})