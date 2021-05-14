const Discord = require('discord.js')
const bot = new Discord.Client();
const {bottoken, message, channels, betweenSends, embed, afkstatus, webhook, embedTitle, embedColor} = require('./config.json');

bot.on('ready', async ready => {
    console.log('Ready!')
})
bot.on('message', async message => {
    if(message.author.bot) return
    console.log('Message recieved from user: ' + message.author.tag)
})
setInterval(async () => {
    for(var i = 0;i < channels.length;i++) {
        try {
            if(embed == true) {
                let embed = new Discord.RichEmbed()
                .setTitle(embedTitle)
                .setColor(embedColor == '' ? 'GREEN' : embedColor.toUpperCase())
                .setDescription(message)
                .setTimestamp();
                bot.channels.get(channels[i]).send(embed);
                console.log(`Sent to channelID [${channels[i]}].`) 
            } else {
             bot.channels.get(channels[i]).send(message);
             console.log(`Sent to channelID [${channels[i]}].`)     
            }  
        } catch (err) {
            console.log('Error when sending to ID: ' + channels[i]);
        }      
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
}, betweenSends);

bot.login(bottoken);
