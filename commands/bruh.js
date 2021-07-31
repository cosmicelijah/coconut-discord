module.exports = {
    name: 'bruh',
    description: "bruh",
    execute(client, message, args, Discord) {

        if (message.author.id === '451196379726086156') {
            let bruhGoodEmbed = new Discord.MessageEmbed()
                .setColor('#56a5ff')
                .setTitle('Bruh <3')
                .addFields(
                    { name: 'I love you!', value: 'You contain so much funny that it makes me want you... >////<' }
                )
                .setImage('https://cdn.discordapp.com/attachments/870716191147163648/870830656303808573/iu.png')

            message.channel.send(bruhGoodEmbed);

        } else {
            let bruhCringeEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Bruh...')
                .addFields(
                    { name: 'Ummmmm...', value: "Not gonna lie, you're kinda cringe. Please stay away from me." }
                )
                .setImage('https://cdn.discordapp.com/attachments/870716191147163648/870830752412098580/iu.png')

            message.channel.send(bruhCringeEmbed);
        }
    }
}