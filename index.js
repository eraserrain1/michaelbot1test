const botconfig = require('./botconfig.json');
const Discord = require('discord.js');

const prefix = botconfig.prefix;
const token = botconfig.token;

if (token.length < 1)
{
    console.log('token is not configured.');
    process.exit();
}

const bot = new Discord.Client({disableEveryone: true});

// const commands = require('./commands/');

bot.on('ready', async () => {
    console.log(`${bot.user.tag} is online!`);
    bot.user.setPresence({ game: { name: 'Your Heart! ♥ ツ' } });
});

bot.on('message', async msg => {
    console.log(`message detetected`);

    if (msg.content.mentions.Client) {
        msg.reply(`${prefix}help for commands.`)
    }

    if (msg.content.toLowerCase() === `${prefix}invitethebottoserver`) {
        msg.reply(`This is the invite for the bot: https://discordapp.com/api/oauth2/authorize?client_id=${botconfig.clientID}&permissions=0&scope=bot`);
    }

    if (msg.content.toLowerCase() === `${prefix}ping`) {
        console.log(`${bot.user.username} message reply Pong!`);
        msg.channel.send('Pong!');
    }

    if (msg.content.toLowerCase() === `${prefix}avatar`){
        console.log(`${bot.user.username} avatar command.`);
        msg.reply(msg.author.avatarURL);
    }
    
    if (msg.content.toLowerCase() === `${prefix}avatar ${msg.mentions.members}`){
        console.log(`${bot.user.username} avatar command mention.`);
        msg.reply(msg.members.first().avatarURL);
    }
})

bot.login(token);