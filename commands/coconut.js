const coconutArray = []
const cultureAmount = 50
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
            console.log(randKey);
    }
}