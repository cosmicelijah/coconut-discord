module.exports = {
    name: "repeat",
    description: "Repeats everything the user says after the command",
    execute(client, message, args, Discord) {
        if(args.length) {
            var repeatArgs = args;
            // message.channel.send(repeatArgs);
            message.delete(1000)
            let repeatEmbed = new Discord.MessageEmbed()
                .setTitle(args.join(' '))
                .setColor("#423879");
            message.channel.send(repeatEmbed);
        }
    }
}