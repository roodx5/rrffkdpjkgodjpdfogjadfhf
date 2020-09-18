//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

const Discord = require("discord.js");
const cmd = require("node-cmd")
const client = new Discord.Client();




client.on('message', message=>
{
  var channelid = message.guild.channels.find('name','orders')
  var prefix = '!'
  var args = message.content.split(' ').slice('1').join(' ');
  if(message.content.startsWith(prefix + 'req'))
  {
    var embed = new Discord.RichEmbed()
    .setTitle(`طلب جديد من : ${message.author.username}`)
    .setDescription(`${args}`)
    channelid.sendEmbed(embed).then(m=>
      {
        message.reply('** <a:3307_verif_red:756279703266132078> تم ارسال طلبك انتظر حتا نرد عليك**')
        
      })

  }
})


client.on('message', message=>
{
  var channelid = message.guild.channels.find('name','sug')
  var prefix = '!'
  var args = message.content.split(' ').slice('1').join(' ');
  if(message.content.startsWith(prefix + 'sug'))
  {
    var embed = new Discord.RichEmbed()
    .setTitle(`اقتراح  جديد من : ${message.author.username}`)
    .setDescription(`${args}`)
    channelid.sendEmbed(embed).then(m=>
      {
        message.reply('** <a:3307_verif_red:756279703266132078> تم ارسال اقتراحك بنجاح**')
        
      })

  }
})




client.login(process.env.BOT_TOKEN);
