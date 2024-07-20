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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252905131075";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_48_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9zQUh2Z3U3c1cwYjRUVE5ERkxreWZ2SEV2dk5jdG8vaEhDRkRKdkJBcEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRRWDBNMlJWUkRxd0c4MnhYckFyOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjA4OTA5ZGYtMWQzOS00ODNkLWI4MTQtZmE1NjRkZjU0ZTgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDcwLFxuICAgICAgMjA2LFxuICAgICAgNDQsXG4gICAgICAwLFxuICAgICAgMjIyLFxuICAgICAgMTY3LFxuICAgICAgMjQ0LFxuICAgICAgMjA3LFxuICAgICAgMjgsXG4gICAgICAyMDEsXG4gICAgICAxNDYsXG4gICAgICAxNDMsXG4gICAgICA1MyxcbiAgICAgIDc4LFxuICAgICAgOTIsXG4gICAgICAxNjAsXG4gICAgICAzNCxcbiAgICAgIDEzNSxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICA4MCxcbiAgICAgIDIyMCxcbiAgICAgIDIwMyxcbiAgICAgIDEzMCxcbiAgICAgIDE3OCxcbiAgICAgIDEwMyxcbiAgICAgIDE1NixcbiAgICAgIDE5MSxcbiAgICAgIDE3MixcbiAgICAgIDE3NCxcbiAgICAgIDEwMixcbiAgICAgIDMwLFxuICAgICAgOSxcbiAgICAgIDE2MixcbiAgICAgIDAsXG4gICAgICAxMTMsXG4gICAgICAxODgsXG4gICAgICAxODcsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1RDRjhKTFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTEzMTA3NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NDczMDI1MDgxNDIyOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IN2pvTUNFSTNGOExRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2RqcVZ5MlNLam10SnU0N3RYRzhQemN0WkE5ZE1BaEhkQWxnY3RBMGdIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEOUQ0Z1JOSFhQYzRwM1VKUE5KSEk3K1ZNTVpOWnZXdjk0QUxDZ0pDVVhrVWpGTzNxU2hjUmcxTGhWKzFxektjNHBMTWRNN3ViTmwrRE9WcG9lSXFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGUnNCaHY2QUw1K24rZ3c5U3lsZ1JheEtzcEV5dlg4VEpaeXdlaFdJOWwvYkxROWQ5T2RYdzJuLzJqVjlCYmx6U3ZleHZtaHVkSGdSR1ZPTk1ZZjRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDUxMzEwNzU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUwODQ5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1UY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjFHL3JOa2Zpc25rQk90eU5UMU4vbmlRSUZ4eFRsUldTcVNLM3FhaDMxTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDM0MDc1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "NAJMA NINKEED",


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
