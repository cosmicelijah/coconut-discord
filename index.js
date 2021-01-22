const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();
const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

//Sets the bots Presence and Activity. Uses Data in status.json.
client.on("ready", async() => {
    client.user.setPresence({
        status: statusConfig.status,
        game: {
            name: statusConfig.activity,
            type: statusConfig.activityType
        }
    });
});

client.login(config.token);