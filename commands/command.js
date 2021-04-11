module.exports = {
    name: 'command',
    description: "Embeds",
    execute(client, message, args, Discord){
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#123456')
            .setTitle('Embed Test')
            .setDescription('This is an embed test')
            .addFields(
                {name: 'Field 1', value: 'Uno'},
                {name: 'Field 2', value: 'Dos'}
            )
            .setImage('https://cdn.discordapp.com/attachments/787793633943748613/830683764735737886/553679.png')
            .setFooter('This test was successful');
        message.channel.send(newEmbed);
    }
}