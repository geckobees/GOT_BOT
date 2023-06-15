const edits = [
    'https://cdn.discordapp.com/attachments/947287954127204412/1117908512488562729/lv_7242517605213342981_20230612160829.mp4',
]

module.exports = {
    name: 'edit',
    description: 'generates a GOT edit',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: Boolean,


    callback: (client, interaction) => {
        interaction.reply('https://cdn.discordapp.com/attachments/947287954127204412/1117908512488562729/lv_7242517605213342981_20230612160829.mp4')
    },
}