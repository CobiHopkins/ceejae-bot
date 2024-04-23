// REMOVE ROLE FROM USER;
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('removerole')
       .setDescription('Removes the role with the given name from the user specified.')
       .addStringOption(option =>
            option.setName('role')
               .setDescription('The name of the role.')
               .setRequired(true)
        )
       .addUserOption(option =>
            option.setName('user')
               .setDescription('The user to remove the role from.')
               .setRequired(true)
        )
        .setDefaultMemberPermissions(0x0000000010000000),
    async execute(interaction) {
        const role = interaction.guild.roles.cache.find(role => role.name === interaction.options.getString('role'));
        const user = interaction.options.getUser('user');

        if (role) {
            if (interaction.guild.members.cache.get(user.id).roles.cache.has(role.id)) {
                try {
                    await interaction.guild.members.cache.get(user.id).roles.remove(role);
                    await interaction.reply({ content: `'${role.name}' role removed from ${user.username}!`, ephemeral: false});
                } catch (error) {
                    console.log(error);
                    await interaction.reply({ content: `'${role.name}' role could not be removed from ${user.username}!`, ephemeral: false});
                }
            } else {
                await interaction.reply({ content: `${user.username} does not have the '${role.name}' role.`, ephemeral: false});
            }
        } else {
            await interaction.reply({ content: `The role ${role.name} could not be found.`, ephemeral: false});
            return;
        }
    }
}