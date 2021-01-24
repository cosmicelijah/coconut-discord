const imageDatabase = require("/app/data/imageDatabase.json")
const gifDatabase = require("/app/data/gifDatabase.json")
const coconutArray = []
const cultureAmount = 51
for (i = 0; i < cultureAmount; i++) {
    coconutArray.push(i);
};
module.exports = { 
    name: 'coconut',
    description: "Coconut images (may contain the S P I C Y)",
    execute(client, message, args, Discord){
        if(args[0] == "bruh") {
            const keys = Object.keys(coconutArray)
            const randIndex = Math.floor(Math.random() * keys.length)
            const randKey = keys[randIndex]
            var selectGif = gifDatabase[randKey]
            var selectImage = imageDatabase[randKey]
                let coconutEmbed = new Discord.MessageEmbed()
                    .setColor('#1fdd94')
                    .setTitle("Here's the image you requested nya~")
                    .setImage(`${selectImage}`);
                message.channel.send(coconutEmbed);
        } else if(args[1] == "hurb") {
            message.channel.send("no");
        };
}