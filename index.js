const Discord = require('discord.js')
const status = require('/app/data/status.json')
const fs = require('fs')
let prefix = '?'
const client = new Discord.Client({ disableEveryone: true });

client.login(process.env.TOKEN);

client.commands = new Discord.Collection();

['command_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

// Set custom status 
client.once("ready", () => {
    client.user.setPresence({
        status: status.statusType,
        activity: {
            name: status.activity,
            type: status.activityType
        }
    });
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord);
});

/* Bot by CosmicElijah
    Please refrain from copying this bot and using it as your own without credit
*/