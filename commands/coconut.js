const imageDatabase = require("/app/data/imageDatabase.json")
const coconutArray = []
const cultureAmount = 13
for (i = 0; i < cultureAmount; i++) {
    coconutArray.push(i);
};
module.exports = { 
    name: 'coconut',
    description: "Coconut images (may contain the S P I C Y)",
    execute(client, message, args, Discord){
        const keys = Object.keys(coconutArray)
        const randIndex = Math.floor(Math.random() * keys.length)
        const randKey = keys[randIndex]
        var selectImage = imageDatabase[randKey]
            let coconutEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .setAuthor('Coconut here,')
                .setTitle("Here's the image you requested nya~")
                .setImage('https://cdn.discordapp.com/attachments/787793633943748613/801705812778942474/F21CFCD2-3B26-4B17-8A96-096D39B10C68.JPG');
            message.channel.send(coconutEmbed);
    }
}