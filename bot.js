const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ["371060496276783104"]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});


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

const developers = ["371060496276783104"]
const adminprefix = "r";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send(`**Status You ${argresult} **`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN); 
