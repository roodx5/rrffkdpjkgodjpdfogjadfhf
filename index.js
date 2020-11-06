const discord = require("discord.js");
const client = new discord.Client();


client.on('message' , roodx=>{  

    if(roodx.author.bot)return;
    if(roodx.channel.id !== '774249845925347328') return;
    if(roodx.channel.id !== '774250173848223744') return;
    if(roodx.channel.id !== '774250093246808095') return;
    if(roodx)
    {
        roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')
    }
})


client.on('message' , roodx=>{  

    if(roodx.author.bot)return;
    if(roodx.channel.id !== '774250173848223744') return;
    if(roodx)
    {
        roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')
    }
})


client.on('message' , roodx=>{  

    if(roodx.author.bot)return;
   
    if(roodx.channel.id !== '774250093246808095') return;
    if(roodx)
    {
        roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')
    }
})

client.login(process.env.BOT_TOKEN);
