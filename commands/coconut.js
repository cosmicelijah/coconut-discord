const imageDatabase = require("/app/data/imageDatabase.json")
const gifDatabase = require("/app/data/gifDatabase.json")
const coconutArray = []

//Change if adding more to imageDatabase.json
const cultureAmount = 50 

//Image array loop
for (i = 0; i < cultureAmount; i++) {
    coconutArray.push(i);
};

const coconutGifArray = []

//Change if adding more to to gifDatabase.json
const gifAmount = 4 

//Gif array loop
for (j = 0; j < gifAmount; j++) {
    coconutGifArray.push(j);
};

module.exports = { 
    name: 'coconut',
    description: "Coconut images/gifs (may contain the S P I C Y)",
    execute(client, message, args, Discord){
        
        //Image random integer generator
        const keys = Object.keys(coconutArray)
        const randIndex = Math.floor(Math.random() * keys.length)
        const randKey = keys[randIndex]
        var selectImage = imageDatabase[randKey]

        //Gif random integer generator
        const gifKeys = Object.keys(coconutGifArray)
        const randGifIndex = Math.floor(Math.random() * gifKeys.length)
        const randGifKey = gifKeys[randGifIndex]
        var selectGif = gifDatabase[randGifKey]

        //no args
        if (!args.length) {
            let noArgEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .addFields(
                    {name: "Try again!", value: "Use image or gif after the command to specify what you want!"}
                )
                .setTitle('Oops!');
            message.channel.send(noArgEmbed);

        //wrong args
        } else if(args[0] !== "image", "gif") {
            message.channel.send("That's not an argument, shitass");
        
        //image
        } else if(args[0] === "image") {
            let coconutImageEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .setTitle("Here's the image you requested nya~")
                .setImage(`${selectImage}`);
            message.channel.send(coconutImageEmbed);

        //gif 
        } else if(args[0] === "gif") {
            let coconutGifEmbed = new Discord.MessageEmbed()
                .setColor('#1fdd94')
                .setTitle("Here's the gif you requested nya~")
                .setImage(`${selectGif}`);
            message.channel.send(coconutGifEmbed);
        }
    }
}