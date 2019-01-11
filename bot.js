const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});

const developers = ["371060496276783104"]

client.on('message', message => {
  if (!message.guild) return;
   if(message.content === 'come'){
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('kk <3');
        })
        .catch(console.log);
    } else {
      message.reply('هخ , متخش الروم يعلء');
    }
  }
});

const devs = ["371060496276783104"];
const adminprefix = ["-"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    Client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  Client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  Client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    Client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  Client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
 } else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  Client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN); 
