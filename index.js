const Discord = require('discord.js')
const status = require('./data/status.json')
const fs = require('fs')
let prefix = '?'
let gayass = "sorry bud; "
const client = new Discord.Client({ disableEveryone: true });

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
    if (!message.content.startsWith(prefix) || message.author.bot || !message.content.startsWith(gayass)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord);
});


/* TODO
Add comments
Prettyify code
Optimize shit so it aint so
Reddit image scraper for r/NEKOPARAGAME
More material for image and gif commands
Slash Commands

Unnecessary as embeds aren't filtered {
    Differentiate SFW and NSFW (or possibly minimally censor the nsfw to fit with sfw and create a seperate nsfw argument for uncensored)
}

In case you forget the commands
    git commit -am "message"
    git push -u origin "branch"
    git switch "branch"
    git merge origin "branch"

    Bot by CosmicElijah
    Please refrain from copying this bot and using it as your own without credit
*/

