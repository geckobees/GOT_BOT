require('dotenv').config()
const { Client, IntentsBitField, GatewayIntentBits } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const mongoose = require('mongoose');



const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildPresences,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages
    ]
})


eventHandler(client);


client.login(process.env.TOKEN);