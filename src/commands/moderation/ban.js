const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
    GuildBan,
  } = require('discord.js');
  
  module.exports = {
    //deleted: true,
    name: 'ban',
    description: 'Bans a member!!!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
      {
        name: 'target-user',
        description: 'The user to ban.',
        required: true,
        type: ApplicationCommandOptionType.Mentionable,
      },
      {
        name: 'reason',
        description: 'The reason for banning.',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],
  
    callback: (client, interaction) => {
      const user = interaction.options.get('target-user');
      console.log(user);
    },
  };