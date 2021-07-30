const imageDatabase = require("../data/imageDatabase.json")
const gifDatabase = require("../data/gifDatabase.json")

// # of keys in imageDatabase.json
const imageAmount = Object.keys(imageDatabase).length

const coconutGifArray = []

// # of keys in gifDatabase.json
const gifAmount = Object.keys(gifDatabase).length 

// Gif array loop
for (j = 0; j < gifAmount; j++) {
    coconutGifArray.push(j);
};

module.exports = { 
    name: 'coconut',
    description: "Coconut images/gifs (may contain the S P I C Y)",
    execute(client, message, args, Discord){
        
        // Image random integer generator
        var randIndex = Math.floor(Math.random() * imageAmount)
        var selectImage = imageDatabase[randIndex]

        // Gif random integer generator
        var randGifIndex = Math.floor(Math.random() * gifAmount)
        var selectGif = gifDatabase[randGifIndex]

        // Different cases for first argument for ?coconut
        switch(args[0]) {

            case "image":
                if(randIndex == 69) {
                    let coconut69Image = new Discord.MessageEmbed()
                        .setColor('#1fdd94')
                        .setTitle("69th image, nice")
                        .setImage(`${selectImage}`);
                    message.channel.send(coconut69Image);
                } else if(randIndex != 69) {
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
                let nsfwEmbed = new Discord.MessageEmbed()
                    .setColor('#1fdd94')
                    .setTitle("BONK! Go to horny jail")
                    .setImage('https://cdn.discordapp.com/attachments/870716191147163648/870722921889411163/iu.png');
                message.channel.send(nsfwEmbed);
                break;

            default:
                let defaultEmbed = new Discord.MessageEmbed()
                    .setColor('#1fdd94')
                    .addFields(
                        {name: "Here are some helpful tips!", value: "Use \"image\" or \"gif\" after ?coconut to specify what you want!\nUse nsfw for specifically nsfw images"}
                    )
                    .setTitle('Helpful Info for you!');
                message.channel.send(defaultEmbed);
                break;
        }
    }
}