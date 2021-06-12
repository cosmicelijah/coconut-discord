const { TeamMember } = require("discord.js")

module.exports = {
    name: 'gay',
    description: "gay",
    execute(client, message, args, Discord){

        if(message.author.id === '451196379726086156') {
            let notGayEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('You are not gay')
            .setImage('https://cdn.discordapp.com/attachments/787793633943748613/853062858522230904/notgay.png');
            message.channel.send(notGayEmbed);
        } else {
            let gayEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('You are gay')
            .setImage('https://cdn.discordapp.com/attachments/787793633943748613/853063484727230504/iu.png');
            message.channel.send(gayEmbed);
        }
    }
}