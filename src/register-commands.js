require('dotenv').config();

const {REST, Routes, ApplicationCommandOptionType} = require("discord.js");

const commands = [
    {
        name: 'help',
        description: 'lists all of the commsnds'
    },
    
    {
        name: 'chronos',
        description: 'outputs a random chronos edit',
    },
    {
        name: 'about',
        description: 'does a thing',
    },
    {
        name: 'edit',
        description: 'generates a random edit with regards from the GOT',
    },
    {
        name: 'add',
        description: 'adds two numbers',
        options:[
            {
                name: 'firstnumber',
                description: 'chronos',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'secondnumber',
                description: 'GOT', 
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ]

    }
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands}
        )
        console.log('Slash commands were registered!')
    } catch (error) {
        console.log(`ERROR! ${error}`)
    }
})();