const { Channel } = require("discord.js");
const commandPing = require("./ping.js")
const commandTime = require("./time.js")
const commandCoconut = require('./coconut.js')
const commandRepeat = require('./repeat.js')

module.exports = {
    name: 'help',
    description: "list of available commands",
    execute(client, message, args, Discord) {
        let helpEmbed = new Discord.MessageEmbed()
            .setColor('#FAF0E6')
            .setAuthor('Helpful Coconut here,')
            .setTitle('List of commands')
            .addFields(
                {name: "Prefix to activate me", value: 'Use a "?" to call me, but you already know that nya~'},
                {name: "Ping", value: `${commandPing.description}`},
                {name: "Help", value: "list of available commands"},
                {name: "Time", value: `${commandTime.description}`},
                {name: "Coconut", value: `${commandCoconut.description}`},
                {name: "Repeat", value: `${commandRepeat.description}`},
                {name: "Docs", value: `${docs.description}`},
                {name: "Coming soon!", value: "More features coming soon, so keep your eyes peeled!"}
            )
            .setThumbnail('https://cdn.discordapp.com/attachments/870716191147163648/870751372302241872/iu.png');
        message.channel.send(helpEmbed);
    }
}