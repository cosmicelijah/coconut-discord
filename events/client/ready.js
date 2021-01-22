const status = require('/app/status.json')

module.exports = () =>{
    console.log('Coconut is ready!');

    client.on("ready", async() => {
        client.user.setPresence({
            status: status.active,
            game: {
                name: status.activity,
                type: status.activityType
            }
        });
    });

}
