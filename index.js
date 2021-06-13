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

/*  To do
    Add comments
    Optimize shit so it aint so
    Reddit image scraper for r/NEKOPARAGAME
    More material for image and gif commands
    Add an rng based mini game (not sure what game yet, but might be fun to add)
*/