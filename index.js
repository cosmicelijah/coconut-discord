const Discord = require('discord.js')
const config = require('/app/config.json')
const status = require('/app/status.json')
const fs = require('fs')
let prefix = config.prefix
const client = new Discord.Client({disableEveryone: true});

client.login(config.token);

client.commands = new Discord.Collection();

['command_handler'].forEach(handler =>{
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
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord);
});

//To do
//Fix coconut.js no args (done)
// Add 'dumpass' to coconut command
// Add comments
// Prettyify code
// Optimize shit so it aint so
