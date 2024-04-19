const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('deleterole')
       .setDescription('Deletes the role with the given name from the server.')
       .addStringOption(option =>
            option.setName('rolename')
               .setDescription('The name of the role to delete.')
               .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for deleting the role.')
                .setRequired(true)
        ),
    async execute(interaction) {
        // TODO:
            // Delete the role from the server.
            // Add log to server logs.
    }
}