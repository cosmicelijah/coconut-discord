module.exports = {
    name: 'bruh',
    description: "bruh",
    execute(client, message, args, Discord) {

        if (message.member.roles.cache.has('801667371295047710')) {
            let bruhGoodEmbed = new Discord.MessageEmbed()
                .setColor('#56a5ff')
                .setTitle('Bruh <3')
                .addFields(
                    { name: 'I love you!', value: 'You contain so much funny that it makes me want you... >////<' }
                )
                .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperplay.com%2Fwalls%2Ffull%2Fe%2F1%2Fa%2F187155.jpg&f=1&nofb=1')
                .setAuthor('Happy Coconut here!');

            message.channel.send(bruhGoodEmbed);

        } else {
            let bruhCringeEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Bruh...')
                .addFields(
                    { name: 'Ummmmm...', value: "Not gonna lie, you're kinda cringe. Please stay away from me." }
                )
                .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nautiljon.com%2Fimages%2Fperso%2F00%2F97%2Fcoconut_16079.jpg&f=1&nofb=1')
                .setAuthor('Worried Coconut here...');

            message.channel.send(bruhCringeEmbed);
        }
    }
}