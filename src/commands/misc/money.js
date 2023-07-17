const { description, callback } = require("./edit");
const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'money',
    description: 'what?',

    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
        .setTitle('Store/Work')
        .setDescription('Get or spend Tupa Tix here')
        .setColor('Random')

        interaction.channel.send({ embeds: [embed] });
    }
}