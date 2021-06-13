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
                { name: "Prefix to activate me", value: 'Use a "?" to call me, but you already know that nya~' },
                { name: "Ping", value: `${commandPing.description}` },
                { name: "Help", value: "list of available commands" },
                { name: "Time", value: `${commandTime.description}` },
                { name: "Coconut", value: `${commandCoconut.description}` },
                { name: "Repeat", value: `${commandRepeat.description}` },
                { name: "Coming soon!", value: "More features coming soon, so keep your eyes peeled!" }
            )
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fm-anime.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F9df78eab33525d08d6e5fb8d27136e95%2FN%2Fe%2FNekopara_Coconut_Maid_Dress_1.jpg&f=1&nofb=1');
        message.channel.send(helpEmbed);
    }
}