const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+252905 131 075";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDYyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTAwLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMDlQWGljMG8rWGo1WWxZUkVNUDh3RVYzRWtIdnp3SlRHVnhla1djUmFNVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQlIxSTdGYnZUT0N3QjhUZTYzOHpwd1wiLFxuICBcInBob25lSWRcIjogXCJlOGMwZjJmMC00NGY3LTQwOTAtOGZlMi1jYjBkYTg5NDA0ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMTg3LFxuICAgICAgNDMsXG4gICAgICA5NixcbiAgICAgIDE3NCxcbiAgICAgIDEyNixcbiAgICAgIDI0NSxcbiAgICAgIDE1NCxcbiAgICAgIDExMixcbiAgICAgIDIwOSxcbiAgICAgIDcwLFxuICAgICAgMjMsXG4gICAgICAyMzMsXG4gICAgICAxNjcsXG4gICAgICA5LFxuICAgICAgMTQwLFxuICAgICAgMTkxLFxuICAgICAgMTYwLFxuICAgICAgMTgyLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxNjcsXG4gICAgICAxNTYsXG4gICAgICAxMzYsXG4gICAgICAyNDAsXG4gICAgICAxNDksXG4gICAgICAzMyxcbiAgICAgIDEyMSxcbiAgICAgIDM4LFxuICAgICAgODYsXG4gICAgICAxODcsXG4gICAgICAzOCxcbiAgICAgIDE1NixcbiAgICAgIDE3MyxcbiAgICAgIDI0LFxuICAgICAgMjIwLFxuICAgICAgMTA5LFxuICAgICAgMTg2LFxuICAgICAgMTY0LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0g4Nk02QUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTEzMTA3NToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NDczMDI1MDgxNDIyOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01EN2pvTUNFS0RSN2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2RqcVZ5MlNLam10SnU0N3RYRzhQemN0WkE5ZE1BaEhkQWxnY3RBMGdIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1MTBNYlc5a0ZWUUFRZFlLQ09KMzN4UTQ2cGZSUkRtRkFoeTIrNFducUM4bkRMRFZlaEd3MEIvMW1QaW8rRWk4RXJNRm5pSW1VdFZZTk5HS09rK3FCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXWllVekNpVTlGTTJNak01YWZTb3E4RmMzTU1JdVhtNXN2UVEvQU51d1o0UnVKUk9OYUQyMWZlbzNTWW5HcUQyemdKU29hT3QyNndnNTZ2dHFmV1ZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDUxMzEwNzU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2MDkwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1UY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjFHL3JOa2Zpc25rQk90eU5UMU4vbmlRSUZ4eFRsUldTcVNLM3FhaDMxTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDM0MDc1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MOHAN-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
