const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Returns a list of all the roles in the server.'),
    async execute(interaction) {
        // TODO:
        //      Return a list of all the roles in the server.

        await interaction.reply({ content: interaction.guild.cache.roles.map(role => role.name).join(', '), ephemeral: false })
    }
}