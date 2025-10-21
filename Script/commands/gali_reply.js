const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nahid Bokacoda")==0 || event.body.indexOf("nahid hala")==0 || event.body.indexOf("magi")==0 || event.body.indexOf("nahid abal")==0 || event.body.indexOf("madarxod")==0 || event.body.indexOf("nahid er mare cudi")==0 || event.body.indexOf("nahid re chod")==0 || event.body.indexOf("nahid kankir pula")==0 || event.body.indexOf("Nahid gay")==0 || event.body.indexOf("nahid pagol")==0 || event.body.indexOf("tor to bici nai")==0 || event.body.indexOf("nahid abl")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস নাহিদ চু*দা বাদ দিছে🤣\nতুই নাহিদ বসের লেভেলে নাই আবাল ছোদা🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
