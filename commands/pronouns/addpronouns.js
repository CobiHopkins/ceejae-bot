const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pronouns')
        .setDescription('Set your pronouns for the server. Gives you the appropriate roles. You can have multiple pronouns.'),
    async execute(interaction) {
        // TODO:
        //      Set the pronoun roles for the user.
        //      Take a single or list of pronouns to add multiple roles to the user.
    }
}