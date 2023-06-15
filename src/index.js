require('dotenv').config()
const {Client, IntentsBitField, range, EmbedBuilder, ActivityType, GuildMember} = require("discord.js");
const eventHandler = require('./handlers/eventHandler');
const registerCommands = require('./events/ready/01registerCommands.js');




const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

eventHandler(client);

client.login(process.env.TOKEN);