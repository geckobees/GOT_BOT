require('dotenv').config()
const {Client, IntentsBitField, range, EmbedBuilder, ActivityType, GuildMember} = require("discord.js");


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
    'https://cdn.discordapp.com/attachments/947287954127204412/1118635812523884626/A8D37F37-5502-4F8D-B70B-77AA93219E10.mov',
    'https://cdn.discordapp.com/attachments/957723302430933062/1036729342828486707/lv_7068185086880926977_20221031155144.mp4',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118721363868385400/94ABAD9B-7CF8-44E8-B9F6-B8229439CAA9.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118721373519487096/20ECF422-8ACF-415E-AB1B-12D2E0F31D0B.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118721353042898985/D2D4A4D2-F462-4171-9953-782361E34FE9.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118721344209698927/6BAFD0E2-8D22-4067-AE44-2045F2BBF014.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118721335577821385/16395425-1C6A-42F3-AA7E-986C1D9DFEA1.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118726550200787095/0AF7E854-1AB1-41B2-9292-33E3500768D2.mov',
    'https://cdn.discordapp.com/attachments/947287954127204412/1118730603123191869/2D47638D-A206-4800-A26D-A7FC190E9FEB.mov'
    

];


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.ta} is online.`)

    client.user.setActivity({
        name: 'God Of Time',
        type: ActivityType.Watching
    })
})

client.on('messageCreate', (message) => {

        if (message.author.bot){
            return;
        }
        if (message.author.username === 'Homunculus'){
            message.react('🏳️‍🌈');
        }
        if (message.content.includes('yee')){
            message.reply(message);
        }
})

client.on('interactionCreate', (interaction) => {
    const rand = Math.floor(Math.random() * 1000)
    const rand100k = Math.floor(Math.random() * 100000)
    if (!interaction.isChatInputCommand()) return;
    const random = Math.floor(Math.random() * edits.length);
    if (interaction.commandName === 'chronos'){
        interaction.reply('GOT');
    }
    if (interaction.commandName === 'add'){
        const num1 = interaction.options.get('firstnumber')?.value;
        const num2 = interaction.options.get('secondnumber')?.value;
        interaction.reply(String(num1+num2))
    }
    if (interaction.commandName === 'about'){
        const embed = new EmbedBuilder()
            .setTitle('chronos')
            .setDescription('GOT_BOT')
            .setColor('Random')
            .setImage('https://cdn.discordapp.com/attachments/947287954127204412/1118701393704915004/ezgif-4-9016efed02.gif')
            .addFields(
                {
                    name: 'GOT',
                    value: 'This is a bot made to represent the God of Time.',
                    inline: true
                },
                {
                    name: 'created by:',
                    value: 'DATBOI1064#6927'
                }
            );
        interaction.reply({
            embeds: [embed]
        });

    }
    if (interaction.commandName === 'edit'){
       
        //interaction.reply('Here is an edit brought to you by GOT_BOT!');
        interaction.reply((edits[random]));
        console.log(edits[random])?.String;
    }

    if(interaction.commandName === 'edit' && rand100k === 6){
        interaction.reply('https://cdn.discordapp.com/attachments/957723302430933062/1118728531699052565/638E25C6-7B8B-4899-BFBD-C930A2700AEB.mov');
    }
});


client.login(process.env.TOKEN);