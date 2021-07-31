module.exports = {
    name: 'ping',
    description: "ye olde ping commande",
    execute(client, message, args, Discord) {
        let pingEmbed = new Discord.MessageEmbed()
            .setColor('#bada55')
            .setTitle('Huh???')
            .addFields(
                { name: "Wait?", value: "Did someone ping me?" }
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/787793633943748613/830682936901632030/3sp4asffvmc61.png");
        message.channel.send(pingEmbed);
    }
}