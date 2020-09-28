//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

const Discord = require("discord.js");
const cmd = require("node-cmd")
const client = new Discord.Client();




client.on('message', message=>
{
  var channelid = message.guild.channels.find('name','orders')
  var prefix = '!'
  var args = message.content.split(' ').slice('1').join(' ');
  if(message.content.startsWith(prefix + 'order'))
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
  var channelid = message.guild.channels.find('name','»「الاقتراحات」')
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

client.on('ready', ()=>
{
  client.user.setGame('!-help|OTTAWA S');
  
})




client.on('message', roodx=>
{ 
  var prefix = '!-'
  if(roodx.content.startsWith(prefix +'help'))
  {
   var embed = new Discord.RichEmbed()
   .setTitle(' <a:hfghgf:465846123744067584> قائمه الاوامر')
   .setDescription('!sug ل الاقتراحات ')
.addField('**!order ل طلب اكواد الموجود وا المعلنه عنها**'
,`${roodx.author.username}`)
.setThumbnail(`${roodx.author.avatarURL}`)
.setColor('RANDOM');
roodx.channel.sendEmbed(embed)
   
  }
})



client.login(process.env.BOT_TOKEN);
