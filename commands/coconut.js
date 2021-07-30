const imageDatabase = require("../data/imageDatabase.json")
const gifDatabase = require("../data/gifDatabase.json")
const coconutArray = []

// Change if adding more to imageDatabase.json
const cultureAmount = 103

// Image array loop
for (i = 0; i < cultureAmount; i++) {
    coconutArray.push(i);
};

const coconutGifArray = []

// Change if adding more to to gifDatabase.json
const gifAmount = 4 

// Gif array loop
for (j = 0; j < gifAmount; j++) {
    coconutGifArray.push(j);
};

module.exports = { 
    name: 'coconut',
    description: "Coconut images/gifs (may contain the S P I C Y)",
    execute(client, message, args, Discord){
        
        // Image random integer generator
        const keys = Object.keys(coconutArray)
        const randIndex = Math.floor(Math.random() * keys.length)
        const randKey = keys[randIndex]
        var selectImage = imageDatabase[randKey]

        // Gif random integer generator
        const gifKeys = Object.keys(coconutGifArray)
        const randGifIndex = Math.floor(Math.random() * gifKeys.length)
        const randGifKey = gifKeys[randGifIndex]
        var selectGif = gifDatabase[randGifKey]

        switch(args[0]) {
            case "help":
                let helpArgEmbed = new Discord.MessageEmbed()
                    .setColor('#1fdd94')
                    .addFields(
                        {name: "Here are some helpful tips!", value: "Use \"image\" or \"gif\" after the command to specify what you want!"}
                    )
                    .setTitle('Helpful Info for you!');
                message.channel.send(helpArgEmbed);
                break;

            case "image":
                if(randKey == 69) {
                    let coconut69Image = new Discord.MessageEmbed()
                        .setColor('#1fdd94')
                        .setTitle("69th image, nice")
                        .setImage(`${selectImage}`);
                    message.channel.send(coconut69Image);
                } else if(randKey != 69) {
                    let coconutImageEmbed = new Discord.MessageEmbed()
                        .setColor('#1fdd94')
                        .setTitle("Here's the image you requested nya~")
                        .setImage(`${selectImage}`);
                    message.channel.send(coconutImageEmbed);
                }
                break;

            case "gif":
                let coconutGifEmbed = new Discord.MessageEmbed()
                    .setColor('#1fdd94')
                    .setTitle("Here's the gif you requested nya~")
                    .setImage(`${selectGif}`);
                message.channel.send(coconutGifEmbed);
                break;

            case "nsfw":
                message.channel.send("Coming soon!");
                break;

            default:
                let defaultEmbed = new Discord.MessageEmbed()
                    .setColor('#1fdd94')
                    .addFields(
                        {name: "Here are some helpful tips!", value: "Use \"image\" or \"gif\" after the command to specify what you want!"}
                    )
                    .setTitle('Helpful Info for you!');
                message.channel.send(defaultEmbed);
                break;
        }
    }
}