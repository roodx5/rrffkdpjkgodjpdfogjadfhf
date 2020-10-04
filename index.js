const Discord = require('discord.js');
const client = new Discord.Client();

console.log('OTTAWA BOT IS ONLINE ')

client.on('ready', () => {
  client.user.setPresence({
      game: {
          name: `OTTAWA SHOP`,
          type: 0
          
      }
  });
});












//===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759974848989495367')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})
  
//===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759972246541303839')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})
  //===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759972325596069898')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})

  //===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759972379660124160')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})
  //===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759972405711339550')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})
  //===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759972459100766238')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})
  //===================================================================//
client.on('message', roodx=>
{
  if(roodx.author.bot)return;
  if(roodx.channel.id != '759972616659796009')return;
  if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
})
  
  //===================================================================//
  client.on('message', roodx=>
  {
    if(roodx.author.bot)return;
    if(roodx.channel.id != '759972662213607484')return;
    if(roodx){roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')}
  })




  client.on('message', message=>
{
  if(message.author.bot)return;
  if(message.channel.id !='759976568457396245')return;
  var channelid = message.guild.channels.find('id','759976609733804043')
  var args = message.content.split(' ').slice('1').join(' ');
  if(message.content ==='order')
  {
    var embed = new Discord.RichEmbed()
    .setTitle(`طلب جديد من : ${message.author.username}`)
    .setThumbnail(`${message.author.avatarURL}`)
    .setDescription(`${args}`)
    channelid.sendEmbed(embed).then(m=>
      {
        message.reply('** :zap:تم ارسال طلبك**')
        
      })

  }
})


client.login(process.env.BOT_TOKEN);
