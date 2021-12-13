const Discord = require("discord.js"),
    bot = new Discord.Client(),
    Canvas = require('canvas');
let before = { mSize: 0, vSize: 0 }

bot.on("ready", async () => {
    console.log(`Bot en ligne!`);

    setInterval(() => UpdateBunner(), 30000);
    
   async function UpdateBunner() {
        const guild = bot.guilds.first(),
        vSize = bot.guilds.get('GUILDID').members.filter(m => m.voiceChannel).size,
        mSize = guild.memberCount,
        { vSize: oldV, mSize: oldM } = before;
        
        if (!((vSize - oldV) || (mSize - oldV))) return;

        before = { mSize, vSize };
        const canvas = Canvas.createCanvas(1920, 1080),#  (picture size)
        ctx = canvas.getContext('2d'),
        background = await Canvas.loadImage('hello.png');  # your picture name .jpg or .png
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = '#3f82d9';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = 'regular 95px blood crow';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${guild.memberCount}`, 1028, 782); #where 1028, 782 #where 1028, 782 put cordinate of picture  (member count)
        ctx.font = 'regular 95px blood crow';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${vSize}`, 558, 782);  # where 558, 782 put cordinate of picture  (voice online)
        guild.setBanner(canvas.toBuffer());
    }

})


bot.login('TOKEN');
