const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('updaterole')
       .setDescription('Replies with Pong!')
       .addRoleOption(option => 
            option.setName('role')
                .setDescription('The role to update.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('name')
               .setDescription('The new name of this role.')
               .setRequired(false))
        .addStringOption(option =>
            option.setName('color')
               .setDescription('The new colour of this role. Hexadecimal format.')
               .setRequired(false))
       .setDefaultMemberPermissions(0x0000000010000000),
    async execute(interaction) {
        const role = interaction.options.getRole('role');

        if (!role) return interaction.reply({ content: 'Please provide a valid role to update.', ephemeral: false });

        if (!interaction.options.getString('name') && !interaction.options.getString('color')) return interaction.reply({ content: 'Please provide a name or colour to update.', ephemeral: false });

        // not done yet
        await role.edit({
            name: interaction.options.getString('name') ? interaction.options.getString('name') : role.name,
            color: interaction.options.getString('color') ? interaction.options.getString('color') : role.color,
        })

        await interaction.reply('Role updated!');
    }
}