module.exports = {
    name: "repeat",
    description: "Repeats everything the user says after the command",
    execute(client, message, args, Discord) {
        if(args.length) {
            let repeatEmbed = new Discord.MessageEmbed()
                .setTitle(`${args.length}`);
            message.channel.send(repeatEmbed);
        }
    }
}