const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('updaterole')
       .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // TODO:
        //      Update the role with the colour or name provided.
        await interaction.reply('Role updated!');
    }
}