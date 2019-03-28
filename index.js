/*
Author: Michael
Project: michaelbot1test
Description: Practicing and Testing dicord bot coding.
*/


// Important stuffs:
const botconfig = require('./botconfig.json');
const Discord = require('discord.js');

const prefix = botconfig.prefix;
const token = botconfig.token;

// Checks if token is available
if (token.length < 1)
{
    console.log('token is not configured.');
    process.exit();
}

const client = new Discord.Client({disableEveryone: true});

// Commands
const pingPong = require('./commands/pingpong');

// Bot turns on
client.on('ready', async () => {
    console.log(`${client.user.tag} is online!`);
    client.user.setPresence({ game: { name: 'Your Heart! ♥ ツ' } });
});

// Bot trigggers on message
client.on('message', msg => {
    // Ignores messages if bot is the one that sends them.
    if(msg.author.bot != true)
    {
        // Checks for command prefix
        if(msg.content.startsWith(prefix))
        {
            console.log(`Command: ${msg.author.tag} : ${msg.content}`);
            let msgsplt = msg.content.split(' ');
            {
                // Command switcher
                switch(msgsplt[0].toLowerCase())
                {
                    case prefix + 'ping':
                        pingPong.pong(msg);
                        break;
                    default:
                        msg.reply("No command found, please try again.");
                        break;
                }
            }
        }
    }
    else
    {
        return;
    }
});

// Login bot with token.
client.login(token);