const Discord = require('discord.js');
const client = new Discord.Client();
console.log('roodx is online')




var prefix ='$';

client.on('message', message=>
{
    
    if(message.content === (prefix+'sub'))
    {
      message.channel.send('تم ارسال الرساله الئ الخاص').then(r=>
        {
          r.react('📣')
        })
      
        message.author.send(`**
        SUBMIT TEST | اختبار التقديم
        {يرجاء اختيار اللغه التي تتقنها}
=============================
|                الامر                    |                 اللغات        |
|=============================|
|     java script         |    $sub javascript          |
|     python               |      $sub python           |
|     html & css        |        $sub web               |
|============================= |
       ** `)
    }
})


//=======================================================================================================================
client.on('message', message=>
{
    if(message.content=== (prefix+'sub javascript'))
    {
        message.author.send(`**
        SUBMIT TEST javascript | اختبار التقديم  جافا سكربت    
        {يرجاء اختيار المستوئ البرمجي الخاص بك }   
=============================
|          الرتبه                    |                 المستوئ        |
|=============================|
|    hard | صعب         |    SUPPORT STAR           |
|    normal | متوسط   |   SUPPORT NORMAL     |
|     easy | سهل          |        SUPPORT                  |
|============================= |
                           الامر                            
      ($sub javascript المستوئ)
        
       ** `)
    }
    
    //hard test js 
    if(message.content=== (prefix+'sub javascript hard'))
    { 
        message.author.send(`
<@${message.author.id}>
***
استنتج الاجابات الخاطئه***
**
ثم اكتب
$sub javascript hard رقم الاساله الخاطئه
مثال
$sub javascript hard 12345678910
با  الترتيب من السوال الاول الئ الاخير 
**
        > const Discord = require('discord.js');
        > const r = new Discord.Client();
        > 1- r.on('guildMemberAdd', roodx={})
        > 2-const broadcast = client.voice.createBroadcast();
        > 3-const emoji = guild.emojis.cahe.first(); 
        > 4-guild.member.role.add('member','name')
        > 5-channel.delete() = ل حذف الروم 
        > 6-message.reply('') = ل ارسال رساله 
        > 7-message.author = ل ارسال الرساله مع المنشن
        > 8-message.delete(10) = ل حذف 10 رسائل
        > 9-if(message.content === 'hi'){ message.channel.send('hi')} = كود الرد التلقائي
        > 10-if(message.content === 'hi'){ message.delete();} = ل حذف الرساله
        `)
    }
    //
    //normal test js
    if(message.content=== (prefix+'sub javascript normal'))
    { 
    
        message.author.send(`***
<@${message.author.id}>
استنتج الاجابات الخاطئه ثم اكتب ***
**
علما ان هاذا الكود الناقص هوا اذا الشخص ارسل 
السلام اريد ان يرد البوت في الروم الذي احدده 
لاذالك لازم نعرف متغير 
roodx
كي احدد الروم واضع الاسم او الايدي اكمل الكود
$sub javascript normal الحل
مثال
$sub javascript normal message.guild.roles.get('id','')**
          

          var roodx = ? 
          client.on("message" , message
          if(message.content === 'السلام')
          {
            roodx.send('وعليكم السلام ')
          })
        `)
         
    }
    //esay test js
    if(message.content=== (prefix+'sub javascript easy'))
    { 
    
        message.author.send(`
<@${message.author.id}>
***ما وضيفه هاذا الكود ؟ ****
**
sub javascript easy اسم الكود ب الانقليزي
مثال
sub javascript easy welcome
          
          **
          client.on('message', roodx=>
          {
            var ottawa = roodx.gulid.roles.find('id','member')
            var member = message.mentions.members.first()
            if(roodx.content === 'add')
            {
              member.addRole(ottawa)
            }
          })


        `)
         
    }
    //
      }
    )
 
 
 
         
       
           
              
         
    
    //

//hard & esay & normal java script 
//hard
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+'sub javascript hard 234678'))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "Professional support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.JS");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//
//normal
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+`sub javascript normal message.guild.channels.find('id','')`))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "Good support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.JS");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//
//easy
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+`sub javascript easy addrole`))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "New support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.JS");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//===========================================================================================================================
//python
//========================================================================================================================
client.on('message', message=>
{
    if(message.content=== (prefix+'sub python'))
    {
        message.author.send(`**
        SUBMIT TEST python |  اختبار التقديم بايثون  
        {يرجاء اختيار المستوئ البرمجي الخاص بك }   
=============================
|          الرتبه                    |                 المستوئ        |
|=============================|
|    hard | صعب         |    SUPPORT STAR           |
|    normal | متوسط   |   SUPPORT NORMAL     |
|     easy | سهل          |        SUPPORT                  |
|============================= |
                           الامر                            
      ($sub python المستوئ)
        
       ** `)
    }
    
    //hard test py 
    if(message.content=== (prefix+'sub python hard'))
    { 
        message.author.send(`
***<@${message.author.id}>
استنتج الاجابه الخاطئه
*** **
ثم اكتب
$sub python hard رقم الاجوبه الخاطئه
مثال
$sub python hard 1234567
وارسل الرساله في السيرفر
**
> 1- client = command.Bot(command_prefix= "")
> 2- embed = discord.Embed()
> 3- await ctx.channel.send(embed=embed)
> 4- client.remove_command('help')
> 5- client.run('token')
> 6- @client.commnad()
> async def on_ready():
> 7- @command.has_role("")
> 8- await ctx.edit.send('')
> 9- @commands.has_permissions([ban_members=True, kick_members=True]) 
> 10- print(client.user.name)

        `)
    }
    //
    //normal test py
    if(message.content=== (prefix+'sub python normal'))
    { 
    
        message.author.send(`
<@${message.author.id}>
***اكتشف الخطا!***
 **
ثم اكتب
$sub python normal الخطا
مثال
$sub python normal client.command() 
يجب ان تكون ب الحروف الصغيره وا تكتب في السيرفر
تمعن في الكود وحل السطر الاخير ماذا نكتب بين القوسين لكي تنرسل الرساله
 **


          @client.command()
     async def avatar(ctx, *, e:discord.Member = None):
 e = e if e else ctx.author
  ex = discord.Embed(
       title="Avatar",
    color=discord.Color.dark_blue()
    )
    ex.set_image(url=e.avatar_url)
   ex.set_author(name=e.display_name, icon_url=e.avatar_url)
   ex.set_footer(text=f"بطلب من {e}", icon_url=e.avatar_url)
    await ctx.send(ماذا ينكتب هنا؟؟؟؟؟؟)
        `)
         
    }
    //esay test py
    if(message.content=== (prefix+'sub python easy'))
    { 
    
        message.author.send(`
        <@${message.author.id}>
      ***ما وضيفه هاذا الكود ؟ ****
      **
        ثم اكتب
        $sub python easy اسم الكود ب انقليزي
        مثال
        $sub python easy welcome
**
from discord_webhook import DiscordWebhook

data = 'your message'

webhook_urls = 'url webhook'

webhook = DiscordWebhook(url=webhook_urls, content=data)
response = webhook.execute()
        `)
         
    }
    
      }
    )
    //hard & esay & normal java script 
//hard
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+'sub python hard 1368'))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "Professional support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.PY");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//
//normal
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+`sub python normal embed=ex`))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "Good support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.PY");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//
//easy python
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+`sub python easy webhook`))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "New support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.PY");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//====================================================================================================
//html & css
//========================================================================================================================
client.on('message', message=>
{
    if(message.content=== (prefix+'sub web'))
    {
        message.author.send(`**
        SUBMIT TEST web(html & css) |  اختبار التقديم ويب  
        {يرجاء اختيار المستوئ البرمجي الخاص بك }   
=============================
|          الرتبه                    |                 المستوئ        |
|=============================|
|    hard | صعب         |    SUPPORT STAR           |
|    normal | متوسط   |   SUPPORT NORMAL     |
|     easy | سهل          |        SUPPORT                  |
|============================= |
                           الامر                            
      ($sub web المستوئ)
        
       ** `)
    }
    
    //hard test py 
    if(message.content=== (prefix+'sub web hard'))
    { 
        message.author.send(`
        ***<@${message.author.id}>
        استنتج الاجابه الخاطئه
        ***
        **
        ثم اكتب
        $sub web hard رقم الاجوبه الخاطئه
        مثال
        $sub web hard 1234567
        وارسل الرساله في السيرفر
**
> 1- <meta charset="UTF-8"> ل كتابه اللغه الانقليزي
> 2- <link rel="stylesheet" href="css/main.css">  ل ربط ملف جافا سكربت
> 3- background-image: url(../background.jpg)  ل وضع بوردر ل الصفحه 
> 4- <title>Test Bot</title> عنوان الصفحه
> 5- class="main" ل وضع كلاس ل الامر 
> 6- <buton>hello</button>
> 7- <style> body {padding: 0;margin: 0;backgrund: #5e2a2a;}</style>
> 8- <div class="roodx"> <label>Some text</label><textarea class="ottawa" rows="3"></textarea></div>
> 9- .r::before {width: 100%;height: 0;transform: translate(-50%, -50%) rotate(45deg);}
> 10- transform: translate(-50%, -50%);
 `)
    }
    //
    //normal test py
    if(message.content=== (prefix+'sub web normal'))
    { 
    
        message.author.send(`
        <@${message.author.id}>
         ***اكتشف الخطا!***
         **
         ثم اكتب
         $sub web normal الخطا
         مثال
         $sub web normal x.innerHTML
         يجب ان تكون ب الحروف الصغيره وا تكتب في السيرفر
         **


         <script>
 x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>
        `)
         
    }
    //esay test py
    if(message.content=== (prefix+'sub web easy'))
    { 
    
        message.author.send(`
        <@${message.author.id}>
      ***ما وضيفه هاذا الكود ؟ ****
** ثم اكتب
$sub web easy اسم الكود ب انقليزي
مثال
$sub web easy audio
**
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>`)
         
    }
    
      }
    )
    //hard & esay & normal html css  
//hard
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+'sub web hard 12367'))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "Professional support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.WEB");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//
//normal
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+`sub web normal var`))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "Good support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.WEB");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})
//
//easy WEB
client.on('message', message=>
{
   
    if(message.content.startsWith(prefix+`sub web easy video`))
    {
        if(!message.guild)return

        message.delete();
        let role = message.guild.roles.find(r => r.name === "New support");
        message.member.addRole(role)
        let role1 = message.guild.roles.find(r => r.name === "CODER.WEB");
        message.member.addRole(role1)
        message.reply('**تم قبولك بنجاح:white_check_mark: **')
            
      
    }
})









client.login(process.env.BOT_TOKEN);
