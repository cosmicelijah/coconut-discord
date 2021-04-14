module.exports = {
    name: "repeat",
    description: "Repeats everything the user says after the command",
    execute(client, message, args, Discord) {
        if(args.length) {
            var repeatArgs = args[args.length];
            message.channel.send(args);
            // let repeatEmbed = new Discord.MessageEmbed()
            //     .setTitle(repeatArgs)
            //     .setColor("#423879");
            // message.channel.send(repeatEmbed);
        };
    }
}