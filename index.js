const discord = require("discord.js");
const client = new discord.Client();


client.on('message' , roodx=>{  

    if(roodx.author.bot)return;
    if(roodx.channel.id !== '774249845925347328') return;
    if(roodx)
    {
        roodx.channel.send('https://media.discordapp.net/attachments/742441164459999233/759145606525878333/42_E25EB2C.gif')
    }
})





client.login(process.env.BOT_TOKEN);
