const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Code By : ZorexHost`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Code By : ZorexHost `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | System XPRO`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
}); 

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ًں¤”   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ظ…ظ…ظ†ظˆط¹ ظ†ط´ط± ط§ظ„ط±ظˆط§ط¨ط· :angry: ! **`)
    }
}
});

const prefix = '$'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "388357326614167563") return;

  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
} 
if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
} 



});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         âœ§â–¬â–¬â–¬â–¬â–¬â–¬ BOT System â–¬â–¬â–¬â–¬â–¬â–¬âœ§
         __All Commands__
         $id â‍¼ ط¹ط±ط¶ ظ…ظ„ظپظƒ ط§ظ„ط´ط®طµظٹ
         $ask â‍¼ ط§ظ„ط¨ظˆطھ ظٹط³ط¦ظ„ظƒ ط§ط³ط¦ظ„ط©
         $server â‍¼ ط§ط­طµط§ط¦ظٹط§طھ ط§ظ„ط³ظٹط±ظپط±
         $avatar â‍¼ ط¹ط±ط¶ طµظˆط±طھظƒ ط§ظ„ط´ط®طµظٹط©
         $roll â‍¼ ط§ظ„ظ‚ط±ط¹ط©
         ظٹط¹ط·ظٹظƒ ط±ط§ط¨ط· ط´ط؛ط§ظ„ ظ„ظٹظˆظ… ظˆط§ط­ط¯ â‍¼ ط±ط§ط¨ط·
         $count â‍¼ ظƒظ… ط¹ط¶ظˆ ط¨ط§ظ„ط³ظٹط±ظپط±
         $help â‍¼ ط¹ط±ط¶ ظ‡ط°ظ‡ ط§ظ„ط±ط³ط§ظ„ط©
         $cut â‍¼ ظ„ظ„ط¹ط¨ ظ„ط¹ط¨ط© ظƒطھ طھظˆظٹطھ 
         $ping â‍¼ ظ„ظ…ط¹ط±ظپط© ط³ط±ط¹ط© ط§ط³طھط¬ط§ط¨ط© ط§ظ„ط¨ظˆطھ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ط­ط§ظ„ظٹ
         $minc â‍¼ ط§ط³ط¦ظ„ط© ط¹ظ† ظ…ط§ظٹظ† ظƒط±ط§ظپطھ
         $invite â‍¼ ظٹظ‚ظˆظ„ ظ„ظƒ ظƒظ… ظˆط§ط­ط¯ ط§ظ†طھ ظ…ط¯ط®ظ„
         $new â‍¼ ظ„ظپطھط­ طھط°ظƒط±ط©
          __Admins Commands__
         $ban â‍¼ ط­ط¸ط± ط§ظ„ط¹ط¶ظˆ ظ…ظ† ط§ظ„ط³ظٹط±ظپط±
         $kick â‍¼ ط·ط±ط¯ ط§ظ„ط¹ط¶ظˆ ظ…ظ† ط§ظ„ط³ظٹط±ظپط±
         $clear â‍¼ ظ…ط³ط­ ط§ظ„ط´ط§طھ
         $createroles â‍¼ ط¹ظ…ظ„ ط±طھط¨ ظ…طھظƒط§ظ…ظ„ط© ظ„ظ„ط³ظٹط±ظپط±
         $clear â‍¼ ظ„ ظ…ط³ط­ ط§ظ„ط´ط§طھ ط¨ط¹ط¯ط¯ ظ…ط­ط¯ط¯
         $warn â‍¼ ظ„ط§ط¹ط·ط§ط، ط§ظ„ط´ط®طµ طھط­ط°ظٹط±
         $moveall â‍¼ ظ„ط³ط­ط¨ ط¬ظ…ظٹط¹ ط§ظ„ط¯ط§ط®ظ„ظٹظ† ط¨ ط§ظ„ظپظˆظٹط³
         $voicesetup â‍¼ طھطµظ†ط¹ ظپظˆظٹط³ طھط´ط§ظ†ظ„ ظ…ظƒطھظˆط¨ ظپظٹظ‡ط§ ط¹ط¯ط¯ ط§ظ„ط§ظˆظ†ظ„ط§ظٹظ† ظٹظ„ظٹ ظپظٹ ط§ظ„ظپظˆظٹط³ 
         $mute â‍¼ ظ„ط§ط¹ط·ط§ط، ط§ظ„ط´ط®طµ ظ…ظٹظˆطھ
         $unmute â‍¼ ظ„ظپظƒ ط§ظ„ظ…ظٹظˆطھ ط¹ظ† ط§ظ„ط´ط®طµ
         $mc â‍¼ ظ„ظ‚ظپظ„ ط§ظ„ط´ط§طھ
         $umc â‍¼ ظ„ظپطھط­ ط§ظ„ط´ط§طھ 
         $bc â‍¼ ط±ط³ط§ظ„ط© ط¬ظ…ط§ط¹ظٹط©
         $obc â‍¼ ط±ط³ط§ظ„ط© ط¬ظ…ط§ط¹ظٹط© ظپظ‚ط· ظ„ظ„ط§ظˆظ†ظ„ط§ظٹظ†
         $ebc â‍¼ ط±ط³ط§ظ„ط© ط¬ظ…ط§ط¹ظٹط© ط¨ ط§ظ…ط¨ظٹط¯
         âœ§â–¬â–¬â–¬â–¬â–¬â–¬ BOT System â–¬â–¬â–¬â–¬â–¬â–¬âœ§
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField("Done" , " طھظ€ظ€ظ€ظ€ظ… ط§ط±ط³ظ€ظ€ط§ظ„ظƒ ظپظٹ ط§ظ„ط®ظ€ظ€ط§طµ")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var prefix = "$"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |ًں’¤.";
}
if (z.bot) {
var w = 'ط¨ظˆطھ';
}else {
var w = 'ط¹ط¶ظˆ';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('ًں”±| ط§ط³ظ…ظƒ:',`**<@` + `${z.id}` + `>**`, true)
.addField('ًں›،| ط§ظٹط¯ظٹ:', "**"+ `${z.id}` +"**",true)
.addField('â™¨| Playing:','**'+y+'**' , true)
.addField('ًں¤–| ظ†ظˆط¹ ط­ط³ط§ط¨ظƒ:',"**"+ w + "**",true)    
.addField('ًں“›| ط§ظ„ظƒظˆط¯ ط­ظ‚ ط­ط³ط§ط¨ظƒ:',"**#" +  `${z.discriminator}**`,true)
.addField('**ط§ظ„طھط§ط±ظٹط­ ط§ظ„ط°ظٹ ط§ظ†ط´ط¦ ظپظٹظ‡ ط­ط³ط§ط¨ظƒ | ًں“† **: ' ,year + "-"+ month +"-"+ day)    
.addField("**طھط§ط±ظٹط® ط¯ط®ظˆظ„ظƒ ظ„ظ„ط³ظٹط±ظپط±| âŒڑ   :**", message.member.joinedAt.toLocaleString())    

.addField('**âŒڑ | طھط§ط±ظٹط® ط§ظ†ط´ط§ط، ط­ط³ط§ط¨ظƒ ط§ظ„ظƒط§ظ…ظ„:**', message.author.createdAt.toLocaleString())
.addField("**ط§ط®ط± ط±ط³ط§ظ„ط© ظ„ظƒ | ًں’¬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ط¶ط¹ ط§ظ„ظ…ظٹظ†ط´ظ† ط¨ط´ظƒظ„ طµط­ظٹط­  â‌Œ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** ظ†ظˆط¹ ط§ظ„ط³ظٹط±ظپط±**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __ط§ظ„ط±طھط¨__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط،__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط، ط§ظ„ط§ظˆظ†ظ„ط§ظٹظ†__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ ط§ظ„ط±ظˆظ…ط§طھ ط§ظ„ظƒطھط§ط¨ظٹط©__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ ط±ظˆظ…ط§طھ ط§ظ„طµظˆطھ__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ ط§ظ„ط£ظˆظ†ظ€ط±__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ط§ظٹط¯ظٹ ط§ظ„ط³ظٹط±ظپط±__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ طھظ… ط¹ظ…ظ„ ط§ظ„ط³ظٹط±ظپط± ظپظٹ__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**ط­ط· ط±ظ‚ظ… ظ…ط¹ظٹظ† ظٹطھظ… ط§ظ„ط³ط­ط¨ ظ…ظ†ظ‡**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
client.on('message', message => {
if (message.content.startsWith("$kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("ظٹط¬ط¨ ظ…ظ†ط´ظ† ط§ظ„ط¹ط¶ظˆ");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("طھظ… ط£ط¹ط·ط§ط، ظƒظٹظƒ ط§ظ„ظ‰ : " + mention.tag);
};
});
client.on('message', message => {
if (message.content.startsWith("$ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("ظٹط¬ط¨ ظ…ظ†ط´ظ† ط§ظ„ط¹ط¶ظˆ");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("طھظ… ط£ط¹ط·ط§ط، ط¨ط§ظ†ط¯ ط§ظ„ظ‰ : " + mention.tag);
};
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ط¶ط¹ ط¹ط¯ط¯ ط§ظ„ط±ط³ط§ط¦ظ„ ط§ظ„طھظٹ طھط±ظٹط¯ ظ…ط³ط­ظ‡ط§ ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nط¹ط¯ط¯ ط§ظ„ط±ط³ط§ط¦ظ„ ط§ظ„طھظٹ طھظ… ظ…ط³ط­ظ‡ط§: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
    if (message.content.startsWith("ط±ط§ط¨ط·")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ط±ط§ط¨ط· ط¹ظ„ظ‰ ط§ظ„ط®ط§طµ  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  ظ‡ط°ط§ ظ‡ظˆ ط±ط§ط¨ط· ط³ظٹط±ظپط±
---------------------
-ظ‡ط°ط§ ط§ظ„ط±ط§ط¨ط· طµط§ظ„ط­ ظ„ 100 ظ…ط³طھط®ط¯ظ… ظپظ‚ط·
---------------------
-ظ‡ط°ط§ ط§ظ„ط±ط§ط¨ط· طµط§ظ„ط­ ظ„ظ…ط¯ظ‡ 24 ط³ط§ط¹ظ‡ ظپظ‚ط·
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.content == "$ask") {
         message.react('ًں¤”','ًں‘Œ')
        var x = ['ط§ظٹظ† ظٹظ„ط¹ط¨ ظ…طµط·ظپظٹ ظپطھط­ظٹطں', 'ظ…ط§ ظ‡ظˆ ط§ط³ظ… ظ…ظ„ط¹ط¨ ط¨ط§ط±ط´ط§ظ„ظˆظ†ط©', 'ظ…ط§ ظ‡ظˆ ظٹظˆظ… ط§ظ„ط­ط¬ ط§ظ„ط£ظƒط¨ط±طں', 'ظ…ط§ ظ‡ظˆ ط£ط·ظˆظ„ ط£ظ†ظ‡ط§ط± ط£ظˆط±ط¨ط§ طں', 'ظ…ط§ ظ‡ظˆ ط§ط³ظ… ط¨ظٹطھ ط§ظ„ط¯ط¬ط§ط¬', 'ظ…ط§ ظ‡ظˆ ط£ظˆظ„ ط¨ظ†ظƒ ظ‚ط§ظ… ط¨ط§ظ„ظ†ط´ط§ط· ط§ظ„ظ…طµط±ظپظٹ ظپظٹ ط§ظ„ط³ط¹ظˆط¯ظٹط© ط¹ط§ظ… 1926ظ…' , 'ظ…ط§ ظ‡ظˆ ط£ظˆظ„ ط¬ط§ظ…ط¹ ط£ظ‚ظٹظ… ظپظٹ ظ…طµط±','ظ…ط§ ظ‡ظˆ ط£ط·ظˆظ„ ظ†ظ‡ط± ظپظٹ ط¢ط³ظٹط§','ظ…ط§ ظ‡ظˆ ط£ظ‚ط±ط¨ ظƒظˆظƒط¨ ط¥ظ„ظ‰ ط§ظ„ط´ظ…ط³','ظ…ط§ ظ‡ظˆ ط§ظ„ط­ظٹظˆط§ظ† ط§ظ„ط°ظٹ ظٹظڈط³ظ…ظ‰ ط§ظ„ط¨ظ‡ظ†ط³','ظ…ط§ ظ‡ظˆ ط§ظˆظ„ ظ…ط³ط¬ط¯ ط£ط³ط³ ط¨ط§ظ„ظ…ط¯ظٹظ†ط©','ظ…طھظ‰ ظˆظ‚ط¹ طµظ„ط­ ط§ظ„ط­ط¯ظٹط¨ظٹط© ط¹ط§ظ… 6ظ‡ظ€ ط§ظˆ 3ظ‡ظ€ ط§ظˆ 2ظ‡ظ€طں','ظ…طھظ‰ ظ‚ط§ظ…طھ ط£ظ…ط±ظٹظƒط§ ط¨ط£ظˆظ„ ط±ط­ظ„ط© ظپط¶ط§ط¦ظٹط©','ظ…طھظ‰ ظƒط§ظ†طھ ط؛ط²ظˆط© ط®ظٹط¨ط±طں','ظ…ط§ ظ‡ظٹ ط§ظ„ط³ظˆط±ط© ط§ظ„طھظٹ طھط¨ط¯ط£ ط¨ظ‚ظˆظ„ظ‡ طھط¹ط§ظ„ظ‰ " ظٹط§ ط£ظٹظ‡ط§ ط§ظ„ظ†ط¨ظٹ ط§طھظ‚ ط§ظ„ظ„ظ‡ ظˆظ„ط§ طھط·ط¹ ط§ظ„ظƒط§ظپط±ظٹظ† ظˆط§ظ„ظ…ظ†ط§ظپظ‚ظٹظ† ط¥ظ† ط§ظ„ظ„ظ‡ ظƒط§ظ† ط¹ظ„ظٹظ…ط§ ط­ظƒظٹظ…ط§ ".ط§ط¬ط¨طں','ظ…ط§ ظ‡ظٹ ط§ظ„ط³ظˆط±ط© ط§ظ„طھظٹ ظٹط·ظ„ظ‚ ط¹ظ„ظٹظ‡ط§ ط¹ط±ظˆط³ ط§ظ„ظ‚ط±ط¢ظ†','ظ…ط§ط°ط§ ظٹط³ظ…ظ‰ ظ…ظ† ظ„ط§ظٹظ‚ط±ط£ ظˆظ„ط§ظٹظƒطھط¨','ظ…ط§ظ‡ظٹ ط£ظˆظ„ ط¯ظˆظ„ط© ط§ط³طھط®ط¯ظ…طھ ط·ط§ط¨ط¹ ط§ظ„ط¨ط±ظٹط¯','ظ…ط§ظ‡ظˆ ط´ط¹ط§ط± ط§ظ„ظˆظ„ط§ظٹط§طھ ط§ظ„ظ…طھط­ط¯ط© ط§ظ„ط§ظ…ط±ظٹظƒظٹط©','ظ…ط§ظ‡ظˆ ط§ط°ظƒظٹ ط§ظ„ط­ظٹظˆط§ظ†ط§طھ','ظ…ظ† ظ‡ظˆ ظ…ظƒطھط´ظپ ط£ظ…ط±ظٹظƒط§','ظ…ط§ظ…ط¹ظ†ظ‰ "ظپط±ط¹ظˆظ†" ط§ط¬ط¨طں','ظ…ط§ظ‡ظˆ ط§ظ‚ط±ط¨ ظƒظˆظƒط¨ ط¥ظ„ظ‰ ط§ظ„ط§ط±ط¶','ظ…ط§ ظ‡ظٹ ظ†ط³ط¨ظ‡ ط§ظ„ظ…ظٹط§ظ‡ ظ…ظ† ط§ظ„ظƒط±ظ‡ ط§ظ„ط§ط±ط¶ظٹظ‡?','ظƒظ… ط¹ط¯ط¯ ط§ظ„ط³ط¬ط¯ط§طھ ظپظٹ ط§ظ„ظ‚ط±ط¢ظ† ط§ظ„ظƒط±ظٹظ…طں','ظ…ظ† ظ‡ظˆ ط¨ط·ظ„ ظƒط§ط³ ط§ظ„ط¹ط§ظ„ظ… ظپظٹ ط¹ط§ظ… 1966','ط£ظٹظ† ط£ظپطھطھط­ ط§ظˆظ„ ظ…طھط­ظپ ظپظٹ ط§ظ„ط¹ط§ظ„ظ…?','ظ…ط§ط£ط³ظ… ط£ظ†ط«ظ‰ ط§ظ„ط­ظ…ط§ط±?','ظƒظ… طھط¨ظ„ط؛ ط¯ط±ط¬ظ‡ ط­ط±ط§ط±ظ‡ ط§ظ„ط´ظ…ط³طں','ظ…ظ† ظ‡ظٹ ظ…ط¯ظٹظ†ط© ط§ظ„ط¶ط¨ط§ط¨','ط£ظٹظ† طھظˆط¬ط¯ ط£ط·ظˆظ„ ط³ظƒط© ط­ط¯ظٹط¯ ظپظٹ ط§ظ„ط¹ط§ظ„ظ…?'
        ];
        var x2 = ['ط§ظ„طھط¹ط§ظˆظ†', 'ظƒط§ظ…ط¨ ظ†ظˆ', 'ظٹظˆظ… ط§ظ„ظ†ط­ط±', 'ط§ظ„ط¯ط§ظ†ظˆط¨', 'ظ‚ظ†', 'ط§ظ„ط¨ظ†ظƒ ط§ظ„ظ‡ظˆظ„ظ†ط¯ظٹ', 'ط¬ط§ظ…ط¹ ط¹ظ…ط±ظˆ ط¨ظ† ط§ظ„ط¹ط§طµ','ط§ظ„ظٹط§ظ†ط¬ط³طھظٹ','ط¹ط·ط§ط±ط¯','ط§ظ„ط§ط³ط¯','ظ…ط³ط¬ط¯ ظ‚ط¨ط§ط،','6','ط³ظ†ط© 1962','ط¹ط§ظ… 7ظ‡ظ€','ط§ظ„ط§ط­ط²ط§ط¨','ط³ظˆط±ط© ط§ظ„ط±ط­ظ…ظ†','ط§ظ…ظٹ','ط¨ط±ظٹط·ط§ظ†ظٹط§','ط§ظ„ظ†ط³ط± ط§ظ„ط§طµظ„ط¹','ط§ظ„ط¯ظ„ظپظٹظ†','ظƒظˆظ„ظ…ط¨ط³','ط§ظ„ط¨ظٹطھ ط§ظ„ظƒط¨ظٹط±','ط§ظ„ط²ظ‡ط±ظ‡','71%','15 ط³ط¬ط¯ط©','ط§ظ†ظƒظ„طھط±ط§ ','ط§ظ„ظ‚ط§ظ‡ط±ط©','ط§ظ„ط§طھط§ظ†','15 ظ…ظ„ظٹظˆظ† ط¯ط±ط¬ظ‡ ظ…ط¦ظˆظٹط©','ظ„ظ†ط¯ظ†','ظƒظ†ط¯ط§'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ًں“¢ ط§ظ…ط§ظ…ظƒ ط¯ظ‚ظٹظ‚ط© ظ„ط­ظ„ ط§ظ„ط§ط³ط¦ظ„ط© , ط§ظ„ط³ط¤ط§ظ„ ظٹظ‚ظˆظ„ :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ظ„ظ‚ط¯ ط§ظ†طھظ‡ظ‰ ط§ظ„ظˆظ‚طھ ظˆظ„ظ… ظٹظ‚ظ… ط£ط­ط¯ ط¨ط§ظ„ط£ط¬ط§ط¨ط© ط¨ط´ظƒظ„ طµط­ظٹط­ `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ظ„ظ‚ط¯ ظ‚ظ…طھ ط¨ظƒطھط§ط¨ط© ط§ظ„ط¬ظˆط§ط¨ ط§ظ„طµط­ظٹط­  `);
            message.react('âœ…')
        })
        })
    }
})
client.on('message', message => {
    if (message.content === "$createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#00ffc4", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#dfab11", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#00e7ff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#e4ff00", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#0001ff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ff00cd", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#00ffc4", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#60ff00", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#14ff00", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#ff002d", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#009aff", permissions: [] })
        

message.channel.sendMessage('**ط§ظ„ط±ط¬ط§ط، ط§ظ„ط§ظ†طھط¸ط§ط± ط±ظٹط« ظ…ط§ ظٹطھظ… طµظ†ط§ط¹ظ‡ ط§ظ„ط±طھط¨ **')
}
});

  client.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed ()
  .setTitle('Bot Logs')
  .addField(' **Bot left from :**[' + `${guild.name}` + ']     **By : **' + `${guild.owner.user.username}` +  ' ')
  .setFooter('The bot is crying')
  .setTimestamp()
  client.channels.get("476342429575020544").send(embed)
});


client.on('message', message => {

    if (message.content === "$count") {

    let embed = new Discord.RichEmbed()

.addField('Count: ' , message.guild.memberCount)
.setColor("RANDOM")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});

client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "$";
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "warn") {
          if (!message.channel.guild) return;
          if(!message.guild.roles.find(r => r.name === 'warns')); //code by iBeAnthonyD
          if(!message.guild.roles.find(r => r.name === 'warns')); //code by iBeAnthonyD
          let user = message.mentions.users.first();
          if (message.mentions.users.size < 1) return message.reply('** ظٹط¬ط¨ ط¹ظ„ظٹظƒ ط§ظ„ظ…ظ†ط´ظ† ط§ظˆظ„ط§ظ‹ **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Warned!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**ًں‘¥  ط§ظ„ظ…ط³طھط®ط¯ظ…**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**ًں”¨  طھظ… ط¨ظˆط§ط³ط·ط© **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**ًں“–  ط§ظ„ط³ط¨ط¨**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Warned!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} طھظ… ط§ط¹ط·ط§ط¦ظƒ طھط­ط°ظٹط±
  ${message.author.tag}  ط¨ظˆط§ط³ط·ط©
  [ ${reason} ] : ط§ظ„ط³ط¨ط¨
  ط§طھظ…ظ†ظ‰ ط§ظ† ظ„ط§ ظٹطھظƒط±ط± ظ‡ط°ط§ ط§ظ„ط؛ظ„ط· ظ…ط¬ط¯ط¯ط§
  `)
          .setFooter(`ظپظٹ ط³ظٹط±ظپط± : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
    });


    client.on('message', message => { //  by [ <@480407581085532180> ]

        if(message.content.startsWith(prefix + 'moveall')) {
      
         if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**ظ„ط§ظٹظˆط¬ط¯ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط© ط³ط­ط¨ ط§ظ„ط£ط¹ط¶ط§ط،**');
      
         if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**ظ„ط§ظٹظˆط¬ط¯ ظ„ط¯ظٹ طµظ„ط§ط­ظٹط© ط§ظ„ط³ط­ط¨**");
      
        if (message.member.voiceChannel == null) return message.channel.send(`**ط§ظ„ط±ط¬ط§ط، ط§ظ„ط¯ط®ظˆظ„ ظ„ط±ظˆظ… طµظˆطھظٹ**`)
      
         var author = message.member.voiceChannelID;
      
         var m = message.guild.members.filter(m=>m.voiceChannel)
      
         message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
      
         m.setVoiceChannel(author)
      
         })
      
         message.channel.send(`**طھظ… ط³ط­ط¨ ط¬ظ…ظٹط¹ ط§ظ„ط£ط¹ط¶ط§ط، ط§ظ„ظٹ ط§ظ„ط±ظˆظ… ط§ظ„طµظˆطھظٹ ط­ظ‚ظƒ.**`)
      
      
      
         }
      
         });



         client.on('guildMemberAdd', member => {
            member.guild.fetchInvites().then(guildInvites => {
              const ei = invites[member.guild.id];
              invites[member.guild.id] = guildInvites;
              const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
              const inviter = client.users.get(invite.inviter.id);
              const logChannel = member.guild.channels.find(channel => channel.name === "text");
              logChannel.send(`Invited by: <@${inviter.tag}>`);
            });
          });
          
          
          const cuttweet = [
               ':bookmark:ظƒطھ طھظˆظٹطھ â€ڈ| طھط®ظٹظ‘ظ„ ظ„ظˆ ط£ظ†ظƒ ط³طھط±ط³ظ… ط´ظٹط، ظˆط­ظٹط¯ ظپظٹطµط¨ط­ ط­ظ‚ظٹظ‚ط©طŒ ظ…ط§ط°ط§ ط³طھط±ط³ظ…طں',
               ':bookmark:ظƒطھ طھظˆظٹطھ | ط£ظƒط«ط± ط´ظٹط، ظٹظڈط³ظƒظگطھ ط§ظ„ط·ظپظ„ ط¨ط±ط£ظٹظƒطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ط§ظ„ط­ط±ظٹط© ظ„ظ€ ... طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ‚ظ†ط§ط© ط§ظ„ظƒط±طھظˆظ† ط§ظ„ظ…ظپط¶ظ„ط© ظپظٹ ط·ظپظˆظ„طھظƒطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ â€ڈ| ظƒظ„ظ…ط© ظ„ظ„طµظڈط¯ط§ط¹طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ â€ڈ| ظ…ط§ ط§ظ„ط´ظٹط، ط§ظ„ط°ظٹ ظٹظڈظپط§ط±ظ‚ظƒطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ…ظˆظ‚ظپ ظ…ظ…ظٹط² ظپط¹ظ„طھظ‡ ظ…ط¹ ط´ط®طµ ظˆظ„ط§ ظٹط²ط§ظ„ ظٹط°ظƒط±ظ‡ ظ„ظƒطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ â€ڈ| ط£ظٹظ‡ظ…ط§ ظٹظ†طھطµط±طŒ ط§ظ„ظƒط¨ط±ظٹط§ط، ط£ظ… ط§ظ„ط­ط¨طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ط¨ط¹ط¯ ظ،ظ  ط³ظ†ظٹظ† ط§ظٹط´ ط¨طھظƒظˆظ† طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ â€ڈ| ظ…ظگظ† ط£ط؛ط±ط¨ ظˆط£ط¬ظ…ظ„ ط§ظ„ط£ط³ظ…ط§ط، ط§ظ„طھظٹ ظ…ط±طھ ط¹ظ„ظٹظƒطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ط¹ظ…ط±ظƒ ط´ظ„طھ ظ…طµظٹط¨ط© ط¹ظ† ط´ط®طµ ط¨ط±ط؛ط¨طھظƒ طں',
               'ظƒطھ طھظˆظٹطھ | ط£ظƒط«ط± ط³ط¤ط§ظ„ ظˆط¬ظگظ‘ظ‡ ط¥ظ„ظٹظƒ ظ…ط¤ط®ط±ظ‹ط§طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ…ط§ ظ‡ظˆ ط§ظ„ط´ظٹط، ط§ظ„ط°ظٹ ظٹط¬ط¹ظ„ظƒ طھط´ط¹ط± ط¨ط§ظ„ط®ظˆظپطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ ظٹظپط³ط¯ ط§ظ„طµط¯ط§ظ‚ط©طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ط´ط®طµ ظ„ط§طھط±ظپط¶ ظ„ظ‡ ط·ظ„ط¨ط§ طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظƒظ… ظ…ط±ظ‡ ط®ط³ط±طھ ط´ط®طµ طھط­ط¨ظ‡طں.',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظƒظٹظپ طھطھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ط§ط´ط®ط§طµ ط§ظ„ط³ظ„ط¨ظٹظٹظ† طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظƒظ„ظ…ط© طھط´ط¹ط± ط¨ط§ظ„ط®ط¬ظ„ ط§ط°ط§ ظ‚ظٹظ„طھ ظ„ظƒطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ط¬ط³ظ…ظƒ ط§ظƒط¨ط± ظ…ظ† ط¹ظŒظ…ط±ظƒ ط§ظˆ ط§ظ„ط¹ظƒط³ظ‘ طں!',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ |ط£ظ‚ظˆظ‰ ظƒط°ط¨ط© ظ…ط´طھ ط¹ظ„ظٹظƒ طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | طھطھط£ط«ط± ط¨ط¯ظ…ظˆط¹ ط´ط®طµ ظٹط¨ظƒظٹ ظ‚ط¯ط§ظ…ظƒ ظ‚ط¨ظ„ طھط¹ط±ظپ ط§ظ„ط³ط¨ط¨ طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ‡ظ„ ط­ط¯ط« ظˆط¶ط­ظٹطھ ظ…ظ† ط£ط¬ظ„ ط´ط®طµظچ ط£ط­ط¨ط¨طھطں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ط£ظƒط«ط± طھط·ط¨ظٹظ‚ طھط³طھط®ط¯ظ…ظ‡ ظ…ط¤ط®ط±ظ‹ط§طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | â€ڈط§ظƒط«ط± ط´ظٹ ظٹط±ط¶ظٹظƒ ط§ط°ط§ ط²ط¹ظ„طھ ط¨ط¯ظˆظ† طھظپظƒظٹط± طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ ظ…ط­طھط§ط¬ ط¹ط´ط§ظ† طھظƒظˆظ† ظ…ط¨ط³ظˆط· طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ…ط·ظ„ط¨ظƒ ط§ظ„ظˆط­ظٹط¯ ط§ظ„ط­ظٹظ† طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ‡ظ„ ط­ط¯ط« ظˆط´ط¹ط±طھ ط¨ط£ظ†ظƒ ط§ط±طھظƒط¨طھ ط£ط­ط¯ ط§ظ„ط°ظ†ظˆط¨ ط£ط«ظ†ط§ط، ط§ظ„طµظٹط§ظ…طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ‡ظ„ طھظپط¶ظ„ ط§ظ„ط§ظپظ„ط§ظ… ظˆظ„ط§ ط§ظ„ظ…ط³ظ„ط³ظ„ط§طھ طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ ط§ظپط¶ظ„ ظ‚ظ†ط§ط© طھطھط§ط¨ط¹ظ‡ط§ ظپظٹ ط§ظ„ظٹظˆطھظٹظˆط¨ طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ ط§ظپط¶ظ„ ظ„ط¹ط¨ط© ظ…ظ…ظƒظ† طھظ„ط¹ط¨ظ‡ط§  طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ طھطھط¨ط§ط¹ ط§ظƒط«ط± ط§ظپظ„ط§ظ… ط§ط¬ظ†ط¨ظٹ ط§ظ… ط¹ط±ط¨ظٹ طں',
               ':bookmark:â€ڈظƒطھ طھظˆظٹطھ | ظ…ظˆ ظ„ط§ظ‚ظٹ ط³ط¤ط§ظ„ ط§ط³ط¦ظ„ظ‡ ظ„ظƒ :joy:',
          ]
           
           client.on('message', message => {
             if (message.content.startsWith("$cut")) {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
            var embed = new Discord.RichEmbed()
            .setColor('RANDOM')
             .setThumbnail(message.author.avatarURL)
           .addField('ظ„ط¹ط¨ظ‡ ظƒطھ طھظˆظٹطھ' ,
            `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
            message.channel.sendEmbed(embed);
            console.log('[id] Send By: ' + message.author.username)
              }
          });


          client.on('message' , message => {
            var prefix = "$";
            if(message.author.bot) return;
            if(message.content.startsWith(prefix + "ping")) {
           message.channel.send('Pong...').then((msg) => {
                msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
           })
            }  
           });


const minecraft = [  'ظ…ط§ ظ…ط¹ظ†ظ‰ طھط·ظˆظٹط±ط©ط› silk touch طں',  'ظ…ظ† ظ‡ظˆط© ط§ظ„ظ„ط°ظٹ ظ‚ط¯ ط§ظ†ظ‡ظ‰ ط³ظ„ط³ظ„ط© ط³ظٹط±ظپط± ظ…ط§ظٹطھ ظƒط±ط§ظپطھطں',  'ظ…ط§ظ‡ظˆ ط§ظ„ظˆط­ط´ ط§ظ„ظ„ط°ظٹ ظٹط±ط³ط¨ظ† ظپظٹ ظ…ط¹ط¨ط¯ ط§ظ„ط¨ط­ط±طں',  'ظ…ظ† ط§ظپط¶ظ„ ظٹظˆطھظٹظˆط¨ط± ظٹظ†ط²ظ„ ط´ط±ظˆط­ط§طھ)ط±ط¯ط³طھظˆظ†ظٹط©ط›ط¹ط§ظ…ط©',  'ظ…ط§ط°ط§ ظٹظپط¹ظ„ ظ„ظƒ ط§ظ„ظ‡ظٹط±ظˆط¨ط±ط§ظٹظ†طں',  'ظ…ط§ظ‡ظˆ ط§ظ„ط´ط¦ ط§ظ„ظ„ط°ظٹ ظٹظ…ظƒظ† ظ…ظƒط§ط«ط±ط© ط§ظ„ظپظ„ط¬ط± ظپظٹظ‡طں',  'ظ…ظ† ظ‡ظˆ ط§ظ†ط¯ط± ط«ط§ظ†ظٹ ط´ط¦ ظپظٹ ظ…ط§ظٹظ† ظƒط±ط§ظپطھ',  'ظ…ط§ظ‡ظˆ ط§ظ„ط§ظ…ط± ط§ظ„ظ„ط°ظٹ ظٹط¹ط·ظٹظ†ط§ ظƒظˆظ…ط§ظ†ط¯ ط¨ظ„ظˆظƒطں',  'ظƒظ… ظ…ظ† ط§ظ„ظˆظ‚طھ ظٹط³طھط؛ط±ظ‚ ط§ظ„ظٹظˆظ… ط§ظ„ط¹ط§ط¯ظٹ ظپظٹ ظ…ط§ظٹظ† ظƒط±ط§ظپطھطں',  'ظ‡ظ„ ظ„ظ„ظٹط±ط¯ط³طھظˆظ† ط§ظ‡ظ…ظٹط© ظƒط¨ظٹط±ط© ظپظٹ ظ…ط§ظٹظ† ظƒط±ط§ظپطھطں',  'ط§ظ†ط¯ط± ط§ظˆط±',  'ظ…ط·ظˆط± ظ…ط§ظٹظ† ظƒط±ط§ظپطھ ط§ظ„ط³ط§ط¨ظ‚',  'ط§طµط؛ط± ظ…ظˆط¨ ظپظٹ ظ…ط§ظٹظ† ظƒط±ط§ظپطھ',  'ظƒظٹظپ طھطµظ†ط¹ ط§ظ„ط¨ظˆظ‚',  'ظپظٹ ط§ظٹ ط§ط±طھظپط§ط¹ طھظ„ظ‚ظ‰ ط§ظ„ط¯ط§ظٹظ…ظˆظ†ط¯',  'ظ…ظˆط¨ ظ…ط³طھط­ظٹظ„ طھط¶ط±ط¨ط© ط¨ط§ظ„ط¨ظˆ (ط§ظ„ط³ظ‡ظ…)',  'ظƒظ… ظ†ط­طھط§ط¬ ظ…ظ† Glowstone Dust ظ„ظƒظٹ ظ†طµظ†ط¹ ط¨ظ„ظƒط© ظƒط§ظ…ظ„ط© ظ…ظ†ظ‡',  'ظƒظ… ظ†ط­طھط§ط¬ ط­ط¨ط© ط§ظٹط±ظˆظ† ظ„طµظ†ط¹ ط³ظƒط© ط§ظ„ط­ط¯ظٹط¯ (Track)',  'ظƒظ… ط¹ط¯ط¯ ظ‚ظ„ظˆط¨ ط§ظ„ط¨ظ‚ط±ط©',  'ظ† ظ…ط§ط°ط§ ظٹط®ط§ظپ ط§ظ„ظƒط±ظٹط¨ط±',  'ظٹط´طھظ‡ط± ط§ظ„ط§ظ†ط¯ط±ظ…ط§ظ† ط¨â€¦..?',  'ظƒظ… ط¹ط¯ط¯ ظ‚ظ„ظˆط¨ ط§ظ„ط§ظٹط±ظˆظ† ظ‚ظˆظ„ظ…',  'ظƒظ… ط¶ط±ط¨ط© طھط¶ط±ط¨ ط§ظ„ط¯ط¬ط§ط¬ط© ظˆ طھظ…ظˆطھ',  'ظƒظ… ط¨ظ„ظˆظƒط© طھط­طھط§ط¬ ط¨ظˆط§ط¨ط© ط§ظ„ظ†ط°ط±',  'ظƒظ… ط¨ظ„ظˆظƒط© طھط­طھط§ط¬ ط¨ظˆط§ط¨ط© ط§ظ„ط§ظ†ط¯',  'ظƒظ… طھط­طھط§ط¬ ط§ظ„ظپط±ظ† ط§ظٹط±ظˆظˆظ† ط¹ط´ط§ظ† طھطµظ†ط¹ظ‡ط§',  'ظƒظٹظپ طھطµظ†ط¹ ظƒط±ط§ظپطھظ†ظ‚ طھظٹط¨ظ„',  'ظƒظ… ظٹط§ط®ط° ظˆظ‚طھ ط§ظ„ظ†ط¨ط§طھ ط¹ط´ط§ظ† ظٹظƒط¨ط±',  'ظƒظ… ظ‚ظ„ظˆط¨ ط³طھظٹظپظٹ',  'ظƒظ… ظ‚ظ„ظˆط¨ ط§ظ„ط§ظ†ط¯ط± ظ…ط§ظ†',  'ظ‡ظ„ ط§ظ„ط§ظ†ط¯ط± ظ…ط§ظ† ظٹط¶ط±ط¨',  'ظ‡ظ„ ط§ظ„ط²ظˆظ…ط¨ظٹ ط؛ط¨ظٹ طں ظˆ ظپظٹ ط§ظٹ طھط­ط¯ظٹط« طں',  'ظ…ط§ظ‡ظˆ ط§ظ„ط§ظپط¶ظ„ ظ„ظ„طھط³ط®ظٹظ† ط§ظ„ط§ظپط§ ط§ظˆ ظپط­ظ… طں',  'ظ…ط§ظ‡ظˆ ط´ط¦ ط§ظ„ط°ظٹ ط§ظ‚ظˆظ‰ ظ…ظ† ط§ظ„ط§ظˆط¨ط³ظٹط¯ظٹظ† طں',]
client.on('message', message => {

 
if (message.content.startsWith(prefix + 'minec')) {

  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("ظ„ط¹ط¨ط© ظ…ط§ظٹظ† ظƒط±ط§ظپطھ ..")
.setColor('RANDOM')
.setDescription(`${minecraft[Math.floor(Math.random() * minecraft.length)]}`)
.setImage("https://i.imgur.com/RyOXHmZ.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}

})

client.on('message', message => {
   if(message.content.startsWith("$invite")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has **${inviteCount}** invites.`);
});
  }
});


      client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ظ„ظٹط³ ظ„ط¯ظٹظƒ ط§ظ„طµظ„ط§ط­ظٹط§طھ ط§ظ„ظƒط§ظپظٹط©**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ظ„ظٹط³ ظ…ط¹ظٹ ط§ظ„طµظ„ط§ط­ظٹط§طھ ط§ظ„ظƒط§ظپظٹط©**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: آ» ظپط´ظ„ ط§ط¹ط¯ط§ط¯ ط§ظ„ط±ظˆظ… ط§ظ„طµظˆطھظٹ .. __ظٹط¬ط¨ ط¹ظ„ظٹظƒ ظƒطھط§ط¨ط© 0 ظپظٹ ط§ط³ظ… ط§ظ„ط±ظˆظ…__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: آ» طھظ… ط¹ظ…ظ„ ط§ظ„ط±ظˆظ… ط§ظ„طµظˆطھظٹ ط¨ظ†ط¬ط§ط­');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
})


client.on('message', message => {


if (message.content === prefix + "mc") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You donâ€™t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted âœ… ")
           });
}
  if (message.content === prefix + "umc") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You donâ€™t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted âœ… ")
           });
}
  

});





client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**ط£ظ†طھ ظ„ط§ طھظ…ظ„ظƒ ط§ظ„ط®طµط§ط¦طµ ط§ظ„ظ„ط§ط²ظ…ط© . ظٹط¬ط¨ طھظˆظپط± ط®ط§طµظٹط© `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**ط£ظ†ط§ ظ„ط§ ط§ظ…ظ„ظƒ ط§ظ„ط®طµط§ط¦طµ ط§ظ„ظƒط§ظپظٹط© . ظٹظ„ط²ظ… ط®طµط§ط¦طµ `Manage Roles` ظ„ظ„ظ‚ظٹط§ظ… ط¨ظ‡ط°ط§ ط§ظ„ط§ظ…ط±**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**ظ…ظ†ط´ظ† ط¹ط¶ظˆ ظ„ط£ط³ظƒط§طھظ‡ ( ظ„ط£ط¹ط·ط§ط¦ط© ظ…ظٹظˆطھ ) ظƒطھط§ط¨ظٹ**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**ظ„ط§ ظٹظ…ظƒظ†ظƒ ط§ط¹ط·ط§ط، ظ„ظ…ظٹظˆطھ ط´ط®طµ ط±طھط¨طھظ‡ ط§ط¹ظ„ظ‰ ظ…ظ†ظƒ**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**ظ„ط§ ظٹظ…ظƒظ†ظ†ظٹ ط§ط¹ط·ط§ط، ظ…ظٹظˆطھ ظ„ط´ط®طµ ط±طھط¨طھظ‡ ط§ط¹ظ„ظ‰ ظ…ظ†ظٹ**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**ظ„ط§ ظٹظ…ظƒظ†ظƒ ط§ط¹ط·ط§ط، ظ…ظٹظˆطھ  ظ„ظ†ظپط³ظƒ**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**ط­ط¯ط¯ ظˆظ‚طھ ط²ظ…ظ†ظٹ ظ„ظپظƒ ط§ظ„ظ…ظٹظˆطھ ط¹ظ† ط§ظ„ط´ط®طµ**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**ط­ط¯ط¯ ظˆظ‚طھ ط²ظ…ظ†ظٹ طµط­ظٹط­**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "ط؛ظٹط± ظ…ط­ط¯ط¯";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('طھظ… ط§ط؛ط·ط§ط¦ظƒ ظ…ظٹظˆطھ ط¨ط³ظٹط±ظپط±')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - ط§ظ„ط³ظٹط±ظپط±',message.guild.name,true)
    .addField('# - طھظ… ط§ط¹ط·ط§ط¦ظƒ ظ…ظٹظˆطھ ط¨ظˆط§ط³ط·ط©',message.author,true)
    .addField('# - ط§ظ„ط³ط¨ط¨',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**ط£ظ†طھ ظ„ط§ طھظ…ظ„ظƒ ط§ظ„ط®طµط§ط¦طµ ط§ظ„ظ„ط§ط²ظ…ط© . ظٹط¬ط¨ طھظˆظپط± ط®ط§طµظٹط© `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**ط£ظ†ط§ ظ„ط§ ط§ظ…ظ„ظƒ ط§ظ„ط®طµط§ط¦طµ ط§ظ„ظƒط§ظپظٹط© . ظٹظ„ط²ظ… ط®طµط§ط¦طµ `Manage Roles` ظ„ظ„ظ‚ظٹط§ظ… ط¨ظ‡ط°ط§ ط§ظ„ط§ظ…ط±**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**ظ…ظ†ط´ظ† ط§ظ„ط´ط®طµ ظ„ظپظƒ ط§ظ„ظ…ظٹظˆطھ ط¹ظ†ظ‡**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});
client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Player'));  
});



client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("$new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **طھظ… ط¥ظ†ط´ط§ط، طھط°ظƒط±طھظƒ طŒ #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`ظ…ط±ط­ط¨ط§ظ‘ ${message.author.username}!`, `ظٹط±ط¬ظ‰ ظ…ط­ط§ظˆظ„ط© ط´ط±ط­ ط³ط¨ط¨ ظپطھط­ ظ‡ط°ظ‡ ط§ظ„طھط°ظƒط±ط© ط¨ط£ظƒط¨ط± ظ‚ط¯ط± ظ…ظ…ظƒظ† ظ…ظ† ط§ظ„طھظپط§طµظٹظ„. ط³ظٹظƒظˆظ† ظپط±ظٹظ‚ ط§ظ„ط¯ط¹ظ… ظ„ط¯ظٹظ†ط§ ظ‚ط±ظٹط¨ط§ ظ„ظ„ظ…ط³ط§ط¹ط¯ط©.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`ظ‡ظ„ ط£ظ†طھ ظ…طھط£ظƒط¯طں ط¨ط¹ط¯ ط§ظ„طھط£ظƒظٹط¯ طŒ ظ„ط§ ظٹظ…ظƒظ†ظƒ ط¹ظƒط³ ظ‡ط°ط§ ط§ظ„ط¥ط¬ط±ط§ط،!\n ظ„ظ„طھط£ظƒظٹط¯ طŒ ط§ظƒطھط¨\`$confirm\`. ط³ظٹط¤ط¯ظٹ ط°ظ„ظƒ ط¥ظ„ظ‰ ظ…ظ‡ظ„ط© ط²ظ…ظ†ظٹط© ظپظٹ ط؛ط¶ظˆظ† 10 ط«ظˆط§ظ†ظچ ظˆط¥ظ„ط؛ط§ط¦ظ‡ط§`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط، ط§ظ„ظ…ط³طھظ„ظ…ظٹظ†`); 
 message.delete(); 
};     
});

client.on("message", message => {

    if (message.content.startsWith(prefix + "obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط، ط§ظ„ظ…ط³طھظ„ظ…ظٹظ†`); 
message.delete(); 
};     
});


client.on('message', message => {
    var prefix = "$";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'ebc') {
        if (!args[1]) {
    message.channel.send("*bc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('آ» ط§ظ„ط³ظٹط±ظپط± :', `${message.guild.name}`)
                .addField('آ» ط§ظ„ظ…ط±ط³ظ„ : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' آ» ط§ظ„ط±ط³ط§ظ„ط© : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });

	client.on('message', async msg => {
    if (msg.author.bot) return undefined;
   
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
   
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
           
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
           
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 5);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
 
                    .setFooter("By iiFireKingYTii_#7310")
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                   
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 15000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
        return undefined;
    } else if (command === `leave`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `queue`) {
       
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        let index = 0;
       
        const embedqu = new Discord.RichEmbed()
 
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `stop`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
        }
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
        }
        return msg.channel.send('لا يوجد شيء حالي في العمل.');
    }
 
    return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
   

    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}
 
const adminprefix = ">";
const devs = ['274923685985386496'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgdame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
 
});
client.on("message", message => {
    if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
${prefix}play ? لتشغيل أغنية برآبط أو بأسم
${prefix}skip ? لتجآوز الأغنية الحآلية
${prefix}stop ? إيقآف الأغنية مؤقتا
${prefix}resume ? لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ? لتغيير درجة الصوت 100 - 0
${prefix}leave? لإخرآج البوت من الروم
${prefix}np ? لمعرفة الأغنية المشغلة حآليا
${prefix}queue ? لمعرفة قآئمة التشغيل
 `)
   message.channel.sendEmbed(embed)
   
   }
   });
	
 
client.login(process.env.BOT_TOKEN);
