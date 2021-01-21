module.exports = {
    name: 'command',
    description: "Embeds",
    execute(message, args, Discord){
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#123456')
            .setTitle('Embed Test')
            .setDescription('This is an embed test')
            .addFields(
                {name: 'Field 1', value: 'Uno'},
                {name: 'Field 2', value: 'Dos'}
            )
            .setImage('http://getwallpapers.com/wallpaper/full/7/f/6/553679.jpg')
            .setFooter('This test was successful');
        message.channel.send(newEmbed);
    }
}