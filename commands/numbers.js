const color = '#960000'


module.exports = { 
    name: 'numbers',
    description: "The numbers, Mason, what do they mean?",
    execute(client, message, args, Discord){

        // Input numbers
        var numbers = args[0];

        // Some checks
        if (numbers == "random") {
            var randNum = Math.abs(Math.ceil(Math.random * 1000000));
            var link = `https://nhentai.net/g/${randNum}/1/`
            let randomNumber = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle("Generating random link...")
                .addFields(
                    {value: `Link to ${randNum}:`, value: `\n${link}`}
                )
            message.channel.send(randomNumber);
        }
        else if (numbers > 999999) {
            let invalidNumber = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle("Invalid number, please enter a valid number")
                .addFields(
                    {name: "Valid numbers:", value: "\n*Usually* 1-999999, but some may not exist"}
                )
            message.channel.send(invalidNumber);
        }
        else if (0 < numbers < 1000000) {
            var link = `https://nhentai.net/g/${numbers}/1/`
            let nhentaiLink = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle("Here is your link")
                .addFields(
                    {value: `Link to ${numbers}:`, value: `${link}`}
                )
            message.channel.send(nhentaiLink);
        }
        else {
            let invalidArg = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle("Invalid argument")
                .addFields(
                    {name: "Please use an integer between 1 and 999999 or the word \"random\""}
                )
            message.channel.send(invalidArg);
        }


    }
}