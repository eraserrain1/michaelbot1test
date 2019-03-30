// Avatar command
module.exports = {
    get: function(msg, msgsplt, client) {
        if(msgsplt[1] == null) {
            msg.reply(msg.author.avatarURL);
        }
        else if(msgsplt[1] != null) {
            let name = msgsplt[1].substring(1, msgsplt[1].length);
            if(client.fetchUser(name)) {
                msg.reply(name.avatarURL);
            }
            else {
                msg.reply('User not found.')
            }

        }
        else {
            msg.reply(`Feature not implemented/error`);
        }
    }
}