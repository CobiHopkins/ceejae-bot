const { SlashCommandBuilder } = require('discord.js');

// Set the role for a user.
module.exports = {
    data: new SlashCommandBuilder()
       .setName('setrole')
       .setDescription('Sets the role with the given name for the user specified.')
       .addStringOption(option => 
            option.setName('role')
                .setDescription('The name of the role.')
                .setRequired(true)
        )
       .addUserOption(option =>
            option.setName('user')
                .setDescription('The name of the user.')
                .setRequired(true)
       )
       .setDefaultMemberPermissions(0x0000000010000000),
    async execute(interaction) {

        const role = interaction.guild.roles.cache.find(role => role.name === interaction.options.getString('role'));
        const member = interaction.options.getUser('user');
        
        if (role) {
            if (interaction.guild.members.cache.get(member.id).roles.cache.has(role.id)) {
                await interaction.reply({ content: `${member} already has the ${role.name} role!`, ephemeral: false});
            } else {
                try {
                    await interaction.guild.members.cache.get(member.id).roles.add(role);
                    await interaction.reply({ content: `${member.username} has been given the ${role.name} role!`, ephemeral: false});
                } catch (error) {
                    console.error(error);
                    await interaction.reply({ content: `${member.username} could not be given the ${role.name} role!`, ephemeral: false});
                }
            }
        }
        else {
            await interaction.reply({ content: `Role '${interaction.options.getString('role')}' could not be found!`, ephemeral: false });
        }
       
    }
}