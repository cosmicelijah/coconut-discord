let timeDate = new Date();
module.exports = {
    name: 'time',
    description: "current time", 
    execute(client, message, args, Discord){
        let timeEmbed = new Discord.MessageEmbed()
            .setColor('#890674')
            .addFields(
                {name: "What time is it?", value: `It's ${timeDate}`}
            );
        message.channel.send(timeEmbed);
    }
}