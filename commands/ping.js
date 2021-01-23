module.exports = {
    name: 'ping',
    description: "ye olde ping commande",
    execute(client, message, args, Discord, commands){
        let pingEmbed = new Discord.MessageEmbed()
            .setColor('#bada55')
            .setTitle('Huh???')
            .setAuthor('Confused Coconut here,')
            .addFields(
                {name: "Wait?", value: "Did someone ping me?"}
            )
            .setThumbnail("https://i.redd.it/3sp4asffvmc61.jpg");
        message.channel.send(pingEmbed);
    }
}