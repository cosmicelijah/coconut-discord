module.exports = {
    name: 'changenick',
    description: "Shooting Avery off his high horse with bots.",
    execute(client, message, args, Discord){
        let changeNick = args[0]
        message.guild.id(406466447565520906).setNickname(changeNick);
        message.channel.send('Done!');
    }
}
