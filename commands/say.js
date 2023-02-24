const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

         message.delete();
        let say = message.content.split(' ').slice(1).join(' ');
    if(!say) return message.reply(':x: | Vous ne pouvez pas envoyer de message vide.');

        message.channel.send(`${say}`);
    }

