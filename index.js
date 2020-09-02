const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = "!"//لاتغير البرفكس
const developers = "587213748759035914"//ايديك

////////


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("۩***⦁⦓ فائمه الاوامر   ⦔⦁***۩",' ‎ ')
  .addField("✽- **!help admin  ≤ ≥   『 أوامر الادمن 』**",' ‎ ')
   .addField("✽- **!help general  ≤ ≥  『 أوامر العامه 』**",' ‎ ')
	 

	 
 .setFooter('|| Bloner Bot ||')


   message.channel.send({embed});


    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help admin") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField("۩***⦁⦓ أوامر الادمن  ⦔⦁***۩",' ‎ ')
 .addField("✽- **!باند ↠  『 لتبنيد شخص من سيرفر 』**",' ‎ ')
 .addField("✽- **!طرد ↠  『 لطرد شخص من السيرفر 』**",' ‎ ')
 .addField("✽- **!مسح ↠  『 مسح الشات 』**",' ‎ ')
 .addField("✽- **!فتح ↠  『 فتح الشات 』**",' ‎ ')
 .addField("✽- **!قفل ↠  『 قفل الشات 』**",' ‎ ')
 .addField("✽- **!سحب @الشخص ↠  『 لسحب شخص الى روم صوتي 』**",' ‎ ')	  
 .addField("✽- **!قائمة الباند ↠  『  يوريك كل الي مبندين بسيرفر  』**",' ‎ ')	  
 .addField("✽- **!خذ @الشخص (اسم الرتبه) ↠  『 بعطي رتبه لشخص معين 』**",' ‎ ')
 .addField("✽- **!خذ الكل (اسم الرتبه)  ↠  『 يعطي رتبه لكل الاشخاص 』**",' ‎ ')
 .addField("✽- **!اسكت ↠  『 لاعطاء ميوت لشخص 』**",' ‎ ')
 .addField("✽- **!تكلم ↠  『 فك الميوت 』**",' ‎ ') 
 .addField("✽- **!قول ↠  『 راح يكتب البوت الي قلته 』**",' ‎ ')
 .setFooter('|| Bloner Bot ||')


   message.channel.send({embed});


    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help general") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField("۩***⦁⦓ أوامر العامه  ⦔⦁***۩",' ‎ ')
 .addField("✽- **!يوزر ↠  『 يعرض معلومات انشاء حسابك 』**",' ‎ ')
 .addField("✽- **!سيرفر ↠  『 يعرض معلومات السيرفر 』**",' ‎ ')
 .addField("✽- **!رابط (الرابط دون القوسين) ↠  『 اختصار روابط 』**",' ‎ ')
 .addField("✽- **!بنق ↠  『 يعرض لك البنق 』**",' ‎ ')
 .addField("✽- **!دعواتي ↠  『 معلومات الانفايت حقك  』**",' ‎ ')
 .addField("✽- **!الاعضاء ↠  『 حاله الاعضاء 』**",' ‎ ')	  
 .addField("✽- **!حسابي ↠  『 معلومات حسابك  』**",' ‎ ')	  
.addField("✽- **!البوت ↠  『 يوريك معلومات البوت  』**",' ‎ ')
.addField("✽- **!صورتي ↠  『   يظهرلك صورتك  』**",' ‎ ')

 .setFooter('|| Bloner Bot ||')


   message.channel.send({embed});
   
    }
});

//كود الباند AbuAz
client.on("message", message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "باند") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) return message.reply("**منشن الشخص**");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(
      `**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `
    );
  }
});




// AbuAz فتح وقفل الشات 
client.on("message", message => {
  var prefix = "!";
  if (message.content === prefix + "قفل") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **__ليس لديك صلاحيات__**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**__تم قفل الشات__ ✅ **");
      });
  }

  if (message.content === prefix + "فتح") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**__ليس لديك صلاحيات__**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**__تم فتح الشات__✅**");
      });
  }
});

////كووود مسح
client.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

  if (command === "مسح") {
    const emoji = client.emojis.find("name", "wastebasket");
    let textxt = args.slice(0).join("");
    if (msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
        msg.delete().then;
        msg.channel
          .send("***```ضع عدد الرسائل التي تريد مسحها 👌```***")
          .then(m => m.delete(3000));
      } else {
        msg.delete().then;
        msg.delete().then;
        msg.channel.bulkDelete(textxt);
        msg.channel
          .send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```")
          .then(m => m.delete(3000));
      }
    }
  }
});

//سحب العضو AbuAz 

client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "سحب @الشخص``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});


//قائمه الباند AbuAz
client.on('message',async message => {
     
     const arraySort = require('array-sort');
const table = require('table');
if (message.content.toLowerCase().startsWith(prefix + 'قائمة الباند')){
     let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;
    message.channel.send(`**${message.guild.name} المبندين :**`)
    ban.forEach(function(ban) {
         message.channel.send(`${ban} (${ban.id})`)
    })
}
 });

client.on("message", message => {
  if (!message.channel.guild) return;
  var prefix = "!";
  if (message.content.startsWith(prefix + "البوتات")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(
        `**يوجد ${
          message.guild.members.filter(m => m.user.bot).size
        } بوتات في هذا السيرفر**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});


//كود رول AbuAz

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'خذ' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "الكل" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء [ '+args[0]+' ] رتبة  **');
		}
		if( args[0].toLowerCase() == "الكل" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});


//ميوت /فك ميوت AbuAz 

client.on("message", async message => {
  if (message.author.boss) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "اسكت") {
    if (!message.channel.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("انت لا تملك صلاحيات !! ")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("البوت لايملك صلاحيات ")
        .then(msg => msg.delete(5000));
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Mute");
    if (!muteRole)
      return message.reply("** لا يوجد رتبة الميوت 'Mute' **").then(msg => {
        msg.delete(5000);
      });
    if (message.mentions.users.size < 1)
      return message.reply("** يجب عليك المنشن اولاً **").then(msg => {
        msg.delete(5000);
      });
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField(
        "**:busts_in_silhouette:  المستخدم**",
        "**[ " + `${user.tag}` + " ]**",
        true
      )
      .addField(
        "**:hammer:  تم بواسطة **",
        "**[ " + `${message.author.tag}` + " ]**",
        true
      )
      .addField("**:book:  السبب**", "**[ " + `${reason}` + " ]**", true)
      .addField("User", user, true);
    message.channel.send({ embed: muteembed });
    var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(
        `      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`
      )
      .setFooter(`في سيرفر : ${message.guild.name}`)
      .setColor("RANDOM");
    user.send(muteembeddm);
  }
  if (command === "تكلم") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage("** يجب عليك المنشن اولاً **");
    let role = message.guild.roles.find(r => r.name === "Mute");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage("**لم يتم اعطاءه ميوت  **:x:");

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "**لقد تم فك الميوت عن الشخص بنجاح**:white_check_mark:"
    );

    return;
  }
});


//يوزر AbuAz
client.on("message", msg => {
    var prefix = '!'//البركفس
    if(msg.content.startsWith(prefix + 'يوزر')){
      let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("سنة📆",msg.guild.createdAt.getFullYear())
      .addField("الساعه📆", msg.guild.createdAt.getHours())
      .addField("اليوم📆", msg.guild.createdAt.getDay())
      .addField("الشهر📆", msg.guild.createdAt.getMonth())
      .addField("الدقائق📆", msg.guild.createdAt.getMinutes())
      .addField("الثواني📆", msg.guild.createdAt.getSeconds())
      .addField("التاريخ📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp()
      msg.channel.send(embed);
    }
  });

//سيرفر AbuAz 
  client.on("message", function(msg) {
  if (msg.content.startsWith("!سيرفر")) {
    if (!msg.channel.guild)
      return msg.reply("**:x: اسف لكن هذا الامر للاداره فقط**");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .addField(
        ":globe_with_meridians: **اسم السيرفر : **",
        `**[ ${msg.guild.name} ]**`,
        true
      )
      .addField(
        ":earth_africa: ** موقع السيرفر :**",
        `**[ ${msg.guild.region} ]**`,
        true
      )
      .addField(
        ":military_medal:** الرتب :**",
        `**[ ${msg.guild.roles.size} ]**`,
        true
      )
      .addField(
        ":bust_in_silhouette:** عدد الاعضاء :**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )
      .addField(
        ":white_check_mark:** عدد الاعضاء الاونلاين :**",
        `**[ ${
          msg.guild.members.filter(m => m.presence.status == "online").size
        } ]**`,
        true
      )
      .addField(
        ":pencil:** الرومات الكتابية :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        ":loud_sound:** رومات الصوت :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "voice").size} ]**`,
        true
      )
      .addField(
        ":crown:** صاحب السيرفر :**",
        `**[ ${msg.guild.owner} ]**`,
        true
      )
      .addField(":id:** ايدي السيرفر :**", `**[ ${msg.guild.id} ]**`, true)
      .addField(
        ":date:** تم عمل السيرفر في : **",
        msg.guild.createdAt.toLocaleString()
      );
    msg.channel.send({ embed: embed });
  }
});


//بوت AbuAz 

client.on('message', message => {
    if(message.content === "!البوت") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});
//بنق AbuAz 
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "بنق")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });



 //رابط AbuAz 
 
 const shorten = require('isgd');
client.on('message', message => {
 if (message.content.startsWith(prefix + 'رابط')) {
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**استعمل**: '+ prefix +'short <رابط>')
  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:**${res}**`);
    })
  } else {
    shorten.custom(args[0], args[1], function(res) {
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`);
      message.channel.send(`اختصار الرابط:**${res}**`);
})
}}
});


//معلومات الانفايت AbuAz 

client.on('message', async message => {
var prefix = '!' /// البريفكس هون غيره يا بعد قلبي
if(message.content.startsWith( prefix + 'دعواتي')) { //// وهون الامر طبعا
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**عدد الدعوات للسيرفر**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تاريخ انضمامك لسيرفرنا **', `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]`)
            .addField('**رابط الدعوة الذي دخلت منه**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});


//حاله الاعضاء AbuAz 
client.on("message", message => {
  if (message.content == "!الاعضاء") {
    const embed = new Discord.RichEmbed().setDescription(`**حالات الاعضاء🔋
:green_heart: اونلاين   ${
      message.guild.members.filter(m => m.presence.status == "online").size
    }

:heart:مشغول       ${
      message.guild.members.filter(m => m.presence.status == "dnd").size
    }

:yellow_heart: خامل      ${
      message.guild.members.filter(m => m.presence.status == "idle").size
    }   

:black_heart: اوفلاين   ${
      message.guild.members.filter(m => m.presence.status == "offline").size
    } 

:blue_heart:   الكل  ${message.guild.memberCount}**`);
    message.channel.send({ embed });
  }

});


//id AbuAz 
  
  client.on("message", msg => {
    var prefix = "!";
if(msg.content.startsWith (prefix + "حسابي")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});



client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "طرد") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن الشخص**");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`تم طرد!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**اسم المطرود:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**من طرف:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**السبب:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});


//// كود افتار عن طريق المنشن
client.on("message", message => {
  if (message.content.startsWith(prefix + "صورتي")) {
    var mentionned = message.mentions.users.first();
    var x5bzm;
    if (mentionned) {
      var x5bzm = mentionned;
    } else {
      var x5bzm = message.author;
    }
    const embed = new Discord.RichEmbed()

      .setImage("")
      .setTitle(`✽ **By Yaser Box**`)
      .setColor("black")
      .setImage(`${x5bzm.avatarURL}`);
    message.channel.sendEmbed(embed);
  }
});





client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "قول") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحيات :rolling_eyes:**"
      );

    message.channel.send("" + args.join(" "));
    message.delete();
  }
});








client.login('NzQ5ODczMjk4NjczNzYyMzE0.X0yT7g.Kan6IrRmN9TAORIUMnJv7L6S_xs')//توكن بوتك
