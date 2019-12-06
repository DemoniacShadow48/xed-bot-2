const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "MG!";

client.login('NjUyNTU0OTQzOTIzODc5OTY5.Xeqeqg.9XNtvPxfJldE153FAm1Oc-_2Ia0');

client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('652560407298310161').send(embed)
    member.addRole('652539111953137687')
})
 
client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('652560407298310161').send(embed)
})

client.on('message', message =>{
    if(message.content === "Yosh Goglixy !!!"){
        message.reply("Vas te faire... Yosh cv ___***" + member.user.member + "**___ ?");
        console.log("Répond a Yosh Me");
    }
});

client.on('message', message =>{
    if(message.content === "Oui et toi ?"){
        message.reply("Oui cv Merci :grin: :galaxy_logo:. Tu fais quand même la conversation avec un bot mdr :joy:");
        console.loog("Répond a UI ET TOI");
    }
});

client.on('message', message =>{
    if(message.content === "C claire XDDDD :joy:"){
        message.reply("MDR tu as que ça a faire :joy: :joy: :joy: XDDDDDDD (___***c'est un easterEGGG***___)");
        console.log("easterEGG 1");
    }
});
