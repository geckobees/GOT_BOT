const edits = [
    'https://cdn.discordapp.com/attachments/947287954127204412/1117908512488562729/lv_7242517605213342981_20230612160829.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117929898615525477/lv_7130540413722561797_20221101185633.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117929906970566666/YouCut_20221102_191156486.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117972750674440303/0958F69C-3404-4E15-8CA2-C6BF3FE98595.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117979665571790968/16626FD2-8D9A-4915-8951-CAE296651534.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118028190779183164/lv_7242373113189584130_20230613000439.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118374509469245510/lv_7227182904051322117_20230613225619.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118374519426515114/lv_6988482979496578306_20230613173139.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118215674439925911/242A984D-B2E3-47FE-A4CE-EB0CC68C291E.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117974906043367514/D1F95FB4-E884-41C7-91EE-8681CE518F5B.mov',
    'https://cdn.discordapp.com/attachments/957723302430933062/1117976764115865620/FD512F1F-F6B5-4359-9F75-66DCB6A86395.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117971314171457616/839A81EA-671C-41A1-9850-946F7A181F48.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1117582306392146063/lv_7239073953539476741_20230611183238.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1115117864471507084/lv_7239112968443563269_20230604231917.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118988469730033704/D03D3646-A9F7-44A4-8312-B3B2B2D4A43A.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118721344209698927/6BAFD0E2-8D22-4067-AE44-2045F2BBF014.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1119106263712792587/lv_7206868094071868673_20230615094853.mp4'


];

module.exports = {
    name: 'edit',
    description: 'generates a GOT edit',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: Boolean,
    
    callback: (client, interaction) => {
        const random = Math.floor(Math.random() * edits.length);
        interaction.reply(edits[random]);
    },
}