const imageDatabase = require("/app/data/imageDatabase.json")
const gifDatabase = require("/app/data/gifDatabase.json")
const coconutArray = []
const cultureAmount = 50
for (i = 0; i < cultureAmount; i++) {
    coconutArray.push(i);
};
const coconutGifArray = []
const gifAmount = 4
for (j = 0; j < gifAmount; j++) {
    coconutArray.push(j);
};
module.exports = { 
    name: 'coconut',
    description: "Coconut images (may contain the S P I C Y)",
    execute(client, message, args, Discord){
        const keys = Object.keys(coconutArray)
        const randIndex = Math.floor(Math.random() * keys.length)
        const randKey = keys[randIndex]
        var selectGif = gifDatabase[randKey]
        var selectImage = imageDatabase[randKey]
        if (!args.length) {
            let noArgEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .setTitle('Oops!')
                .addField(
                    {name: "Try again!", value: 'Use "image" or "gif" after the command to specify what you want!'}
                );
            message.channel.send(noArgEmbed);

        } else if(args.length == "image") {
            let coconutImageEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .setTitle("Here's the image you requested nya~")
                .setImage(`${selectImage}`);
            message.channel.send(coconutImageEmbed);
        } else if(args.length == "gif") {
            let coconutGifEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .setTitle("Here's the gif you requested nya~")
                .setImage(`${selectGif}`)
        }
    }
}