module.exports = {
    name: 'roleadd',
    description: "Carl is rebarded",
    execute(client, message, args, Discord){
        message.member.roles.add('575502501500026953');
        message.channel.send("What a fucking retardass, here's the role dipshit.");
    }
}