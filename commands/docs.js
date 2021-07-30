module.exports = {
    name: 'docs',
    description: "Documentation of how the bot works, also acts as a journal of my progress and frustrations",
    execute(client, message, args, Discord) {
        switch(args[0]) {
            case "1":
                let doc1Embed = new Discord.MessageEmbed()
                    .setTitle("Document 1")
                    .setColor('#00FFFF')
                    .addFields(
                        {name: "Thursday July 29th, 2021", value: "Got sudden inspiration to begin working on this bot again. I have a few goals such as improving the way the image database is handled, making code more optimized, and other general back end stuff."},
                        {name: 'Friday July 30th, 2021', value: 'Began making some improvements, ran into errors, cried. Decided to start making docs so I have memories of this experience forever (or as long as the bot\'s source code exists)\nLater that day, I vastly improved the code that chooses the image/gif in the ?coconut command. I feel like it runs a lot faster now. Plans to add an arg handler are underway.'}
                        )
                    .setThumbnail('https://cdn.discordapp.com/attachments/870716191147163648/870716229579575376/unknown.png');
                message.channel.send(doc1Embed);
                break;
            default:
                let docDocEmbed = new Discord.MessageEmbed()
                        .setTitle('Docs [1] are out now! More on the way!')
                        .setColor('#00FFFF')
                        .setThumbnail('https://cdn.discordapp.com/attachments/870716191147163648/870716229579575376/unknown.png');
                    message.channel.send(docDocEmbed);
                    break;
        }
    }
}