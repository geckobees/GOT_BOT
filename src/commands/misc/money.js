const { description, callback } = require("./edit");
const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'money',
    description: 'what?',

    callback: (client, interaction) => {
        interaction.reply('')
    }
}