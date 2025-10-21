module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস, ${name} কে আবার এড করতে পারলাম না। 
সম্ভবত উনি বটকে ব্লক করেছে অথবা তার প্রাইভেসি সেটিংসের কারণে এড করা যায় না। 
\n───♡𝐍𝐀𝐇𝐈𝐃✦𝐂𝐇𝐀𝐓✦𝐁𝐎𝐓♡───`, event.threadID)
   } else api.sendMessage(`শোন, ${name}, তাপ্পর মেরে কিডনি লক করে দেবো😽😑!
আবার লিভ নেয়ার চেষ্টা করলে - চুদলিং - পং করে দেবো😗🥱!
এডমিনকে না বলে লিভ বিছছ তাই আবার মাফিয়া স্টাইলে অ্যাড করলাম তোকে😎😴 ।
\n───♡𝐍𝐀𝐇𝐈𝐃✦𝐂𝐇𝐀𝐓✦𝐁𝐎𝐓♡────`, event.threadID);
  })
 }
}
