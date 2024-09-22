const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: 'about',
    description: 'about this bot',


    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
            .setTitle('GOT_BOT')
            .setDescription('A bot designed for the white feast')
            .setColor('Random')
            .setImage('https://cdn.discordapp.com/attachments/947287954127204412/1118701393704915004/ezgif-4-9016efed02.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/947287954127204412/1116331788550295642/IMG_4576.jpg')
            .addFields(
                {
                  name: 'Created By',
                  value: '-DATBOI1064#627',
                  inline: true,
                })

            interaction.channel.send({ embeds: [embed] });
    },
}