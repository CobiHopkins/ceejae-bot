const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roleinfo')
        .setDescription('Returns information about a role.')
        .addRoleOption(option => 
             option.setName('role')
                 .setDescription('The role to get information about.')
                 .setRequired(true)
         ),
    async execute(interaction) {
        const role = interaction.options.getRole('role');
        await interaction.reply(`Role ${role.name} has the colour ${role.hexColor}. The role ID is ${role.id} and role permissions are ${role.permissions.bitfield}.`);
    }
}