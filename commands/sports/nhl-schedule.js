const { sr_apikey } = require('../../config.json');
const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('nhlschedule')
       .setDescription('Responds with a list of upcoming NHL games for the current day.'),
    async execute(interaction) {
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let year = new Date().getFullYear();
        const url = `https://api.sportradar.com/nhl/trial/v7/en/games/${year}/${month}/${day}/schedule.json?api_key=${sr_apikey}`;
        const options = { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json',}
        };

        const res = await fetch(url, options);
        const nhl = await res.json();
        let games = [];

        for (let i = 0; i < nhl.games.length; i++) {
            let date = new Date(nhl.games[i].scheduled)
            games.push(`${nhl.games[i].home.name} vs ${nhl.games[i].away.name} (@ ${nhl.games[i].venue.name})`);
        }

        await interaction.reply({ content: games.join('\n'), ephemeral: false });
    }
}