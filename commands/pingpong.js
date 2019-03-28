
// The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module.
module.exports = {
    // grabbing variables
    pong: function(msg, client) {
        msg.reply('Pong!');
    }
}