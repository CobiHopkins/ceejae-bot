const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('createrole')
       .setDescription('Creates a new role with the given name and colour.')
       .addStringOption(option =>
            option.setName('name')
               .setDescription('The name of the role.')
               .setRequired(true)
        )
        .addStringOption(option => 
            option.setName('color')
                .setDescription('The colour of the role. Hexadecimal format.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
               .setDescription('The reason for creating the role.')
               .setRequired(false)
        )
        .addBooleanOption(option =>
            option.setName('mentionable')
               .setDescription('Whether or not the role is mentionable.')
               .setRequired(false)
        ),
    async execute(interaction) {
        let role = interaction.guild.roles.cache.find(r => r.name === interaction.options.getString('name'));
        if (role) {
            interaction.reply({ content: `Role '${role.name}' already exists! Try /updaterole instead.`, ephemeral: true });
            return;
        }
        
        await interaction.guild.roles.create({
            name: interaction.options.getString('name'),
            color: interaction.options.getString('color'),
            mentionable: interaction.options.getBoolean('mentionable'),
            reason: interaction.options.getString('reason')
        })
        .then(role => {
            interaction.reply({ content: `New role '${role.name}' has been created successfully!`, ephemeral: false });
        })
        .catch(error => {
            interaction.reply({ content: 'There was an error while creating the role!', ephemeral: true });
            console.error(error);
        })
    }
}