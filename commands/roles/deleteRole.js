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
        )
        .setDefaultMemberPermissions(0x0000000010000000),
    async execute(interaction) {
        const role = interaction.guild.roles.cache.find(role => role.name === interaction.options.getString('rolename'));

        if (role) {
            try {
                await interaction.guild.roles.delete(role.id);
                await interaction.reply({ content: `'${role.name}' role deleted!`, ephemeral: false});
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: `Failed to delete role '${role.name}'`, ephemeral: true });
            }
        } else {
            await interaction.reply({ content: `${interaction.options.getString('rolename')} could not be found!`, ephemeral: false });
        }
    }
}