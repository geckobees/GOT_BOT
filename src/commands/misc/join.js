const { Guild } = require("discord.js");

module.exports = {
    name: 'join',
    description: 'joins',
    options: [
        {
            name: "Channel",
            description: "channel you want the bot to join",
            type: 7,
            required: true,
        }
    ],
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: Boolean,
    
    callback: (client, interaction) => {
        interaction.reply("poop");
    },
}