module.exports = {
    name: 'time',
    description: "current time",
    execute(client, message, args, Discord) {
        let timeDate = new Date();
        let timeEmbed = new Discord.MessageEmbed()
            .setColor('#890674')
            .addFields(
                { name: "What time is it?", value: `It's ~~time for lunch~~ ${timeDate}` }
            );
        message.channel.send(timeEmbed);
    }
}