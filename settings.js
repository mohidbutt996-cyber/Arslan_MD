const fs = require('fs');
const path = require('path');
const settings = require('./settingss');

// 🔧 CONFIGURATION INITIALIZATION
// ============================================
// Load environment variables from config.env if exists
if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// 📦 HELPER FUNCTION
// ============================================
// Convert string values to boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

// 🔑 API KEY MANAGEMENT
// ============================================
// Global API key configuration with fallback support
// Primary: settings.js → Secondary: process.env → Fallback: Default
global.btc = settings.btc || process.env.BTC_API_KEY || 'Apikey_Lu_Mas';
global.betabotz = settings.betabotz || process.env.BETABOTZ_API_KEY || 'Apikey_Lu_Mas';
global.geminiai = settings.geminiai || process.env.GEMINIAI_API_KEY || 'Apikey_Lu_Mas';
global.geminimaker = settings.geminimaker || process.env.GEMINIMAKER_API_KEY || 'Apikey_Lu_Mas';
global.lolkey = settings.lolkey || process.env.LOLHUMAN_API_KEY || 'Apikey_Lu_Mas';
global.fgsiapi = settings.fgsiapi || process.env.FGSI_API_KEY || 'Apikey_Lu_Mas';

// ⚠️ CRITICAL SECTION - DO NOT MODIFY
// ============================================
// API endpoint configuration
global.APIs = {
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = {
  'https://api.botcahx.eu.org': global.btc
}

// 🤖 BOT CONFIGURATION EXPORT
// ============================================
// Developer: ArslanMD Official
// Bot Name: Arslan-MD
// Repository: https://github.com/Arslan-MD/Arslan_MD
// Version: 2.0.1

module.exports = {
  // ========================
  // 🤖 BOT CORE SETTINGS
  // ========================
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pqcExDYi9mWVAvL2NKSmd5aFE1eXlJRVdicGRlOE5hS25meGJRY1hsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicC9vS2IvTzNkY2hzeTYvZW9BYnZKRTBnNld5L211dE10TEJpcDdmcUhVaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRVdPL3psaXFLamU1bmJSYlhoa09rVnlvSjc4L3prMFJpcFk1OURBSjJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4WGNueXoyMnpYUWZhTXIvNGh2YjhoY05SV1lScHNFci84KzVhZmlWVWlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQcUIrdDQ2RVltY1FSM2JIUTNCOHBrTkE2Qi8rS0NVZGRBWHhidnJsSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inpwc0RHMGtwSENoN3RsQzBkZCtWK2ptRG5SSFNJM0JBdTQwejdOWVE2SFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5tUzV4QnRkNlJCZ3BKRnY2cUxHbHY1eFlnSTlEUERSMjVtRjFLS0htST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3hnVDNrVG9UbmQ3TTRtQ1NxcnFpYittRkh6U0Fwa3NtK0ZSV0MrTHAxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhpUnRVWlJhRDZ6ajZ5b3F3VDdWMGxTT1VPc3EwbVI4cGRFVWlHTUF3U08zTERKUE1oU2ZpUDcrSWNQbzJKVEc0alBhUmZJSzBtTXJ5UmQ1TjJ0akRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IkxETHdrRHIyVC9BYTJsV2tSM2g0QnlTYXpRejBKbE9jOUlERERYTUpZZG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkExMTdFNzBBRTBEOTAxRDJGQjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1ODE3MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFBOUU2M0E3RjU0OUZGOUY4QTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1ODE3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU2doT0hKa2hTTW1yUGoxY1hHbVhhQSIsInBob25lSWQiOiIwNTVmNDIyZi1jNGU2LTQxNzgtOTQzZC1kMTM0YTg0YWIyMTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU00KzhCd21DRUNSbWFSN2VOK1liS3huQzlzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhsQVI1U2VSUmU4TWJtNjhCbmt3Zk5vNWc1WT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2SEpMN0FBUiIsIm1lIjp7ImlkIjoiMTY0NzY5MjQ4Nzk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ6b3JvWGNhcmRlciIsImxpZCI6IjIzNjc0NDgwNTMzNzAzOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTHVuKzRCRU92VnpNb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3TC80KzFHMmEwTVBXUHpWNXE3b3BjajZrRXU1OTRweDFBSjdnV04vZ0dFPSIsImFjY291bnRTaWduYXR1cmUiOiJtcDNlZ2dUdngxWWVHTEdRVk5xYVlIcU1QRm1tUk1QVEJZL2xRWGpyczdaZ21jaDF2TStvTzQ1OVZLZUg1dXZ1RGNFS0M0TVpiRXZoaG1FYk1zSFJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT21Zcm9JbUFTUjBuR09tdGFBb3pDeER5REZEcFU2b0lQUnJRVkE3TDFFd3ZieEpyOVJia09aOHAvaFYvc0t1bnp4NHZ4UEhSRnFuOU1rVmxxNFRyREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjQ3NjkyNDg3OTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNDLytQdFJ0bXRERDFqODFlYXU2S1hJK3BCTHVmZUtjZFFDZTRGamY0QmgifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzA1ODE2NywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFUVkifQ==",
  PREFIX: settings.PREFIX || process.env.PREFIX || ".",
  CHATBOT: settings.CHATBOT || process.env.CHATBOT || "off",
  BOT_NAME: settings.BOT_NAME || process.env.BOT_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  MODE: settings.MODE || process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/Arslan-MD/Arslan_MD",
  PAIRING_CODE: process.env.PAIRING_CODE || 'true',
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ========================
  // 👑 OWNER & DEVELOPER
  // ========================
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "923237045919",
  OWNER_NAME: settings.OWNER_NAME || process.env.OWNER_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  DEV_NAME: process.env.DEV_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  DEV: process.env.DEV || "923237045919",
  DEVELOPER_NUMBER: '923237045919@s.whatsapp.net',

  // ========================
  // 🔐 API KEY INTEGRATION
  // ========================
  BTC_API_KEY: global.btc,
  BETABOTZ_API_KEY: global.betabotz,
  GEMINIAI_API_KEY: global.geminiai,
  GEMINIMAKER_API_KEY: global.geminimaker,
  LOLHUMAN_API_KEY: global.lolkey,
  FGSI_API_KEY: global.fgsiapi,
  
  // ========================
  // 🎵 MEDIA & AUDIO
  // ========================
  MENU_AUDIO_URL: settings.MENU_AUDIO_URL || process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/xkvhbi.mp3',
  AUDIO_URL: settings.AUDIO_URL || process.env.AUDIO_URL || 'https://files.catbox.moe/j88eur.mp3',
  AUDIO_URL2: settings.AUDIO_URL2 || process.env.AUDIO_URL2 || 'https://files.catbox.moe/wlt7ge.mp3',

  // ========================
  // 📧 NEWSLETTER SETTINGS
  // ========================
  NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363348739987203@newsletter',
  N_NAME: process.env.N_NAME || "❀༒★[ᴀʀꜱʟᴀɴ-ᴍᴅ]★༒❀",

  // ========================
  // ⚡ AUTO-RESPONSE SYSTEM
  // ========================
  AUTO_REPLY: settings.AUTO_REPLY || process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: settings.AUTO_STATUS_REPLY || process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Just seen ur status 😆 🤖",
  READ_MESSAGE: settings.READ_MESSAGE || process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "📵 Calls are not allowed on this number unless you have permission. 🚫",
  ALIVE_IMG: settings.ALIVE_IMG || process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ : github.com/Arslan-MD/Arslan_MD",

  // ========================
  // ✨ REACTION & STICKER
  // ========================
  AUTO_REACT: settings.AUTO_REACT || process.env.AUTO_REACT || "false",
  OWNER_REACT: settings.OWNER_REACT || process.env.OWNER_REACT || "false",
  CUSTOM_REACT: settings.CUSTOM_REACT || process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: settings.CUSTOM_REACT_EMOJIS || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  AUTO_STICKER: settings.AUTO_STICKER || process.env.AUTO_STICKER || "false",

  // ========================
  // 🎭 MEDIA AUTOMATION
  // ========================
  AUTO_RECORDING: settings.AUTO_RECORDING || process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: settings.AUTO_TYPING || process.env.AUTO_TYPING || "false",
  MENTION_REPLY: settings.MENTION_REPLY || process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: settings.MENU_IMAGE_URL || process.env.MENU_IMAGE_URL || "https://files.catbox.moe/16i1l7.jpg",

  // ========================
  // 🛡️ SECURITY & PROTECTION
  // ========================
  ANTI_DELETE: settings.ANTI_DELETE || process.env.ANTI_DELETE || "true",
  ANTI_CALL: settings.ANTI_CALL || process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: settings.ANTI_BAD_WORD || process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: settings.ANTI_LINK || process.env.ANTI_LINK || "true",
  ANTI_SPAM: settings.ANTI_SPAM || process.env.ANTI_SPAM || "true",
  ANTI_VV: settings.ANTI_VV || process.env.ANTI_VV || "true",
  DELETE_LINKS: settings.DELETE_LINKS || process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: settings.ANTI_BOT || process.env.ANTI_BOT || "true",
  PM_BLOCKER: settings.PM_BLOCKER || process.env.PM_BLOCKER || "true",

  // ========================
  // 💫 BOT BEHAVIOR & APPEARANCE
  // ========================
  DESCRIPTION: process.env.DESCRIPTION || "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ",
  PUBLIC_MODE: settings.PUBLIC_MODE || process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: settings.ALWAYS_ONLINE || process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: settings.AUTO_STATUS_REACT || process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_SEEN: settings.AUTO_STATUS_SEEN || process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: settings.AUTO_BIO || process.env.AUTO_BIO || "false",
  WELCOME: settings.WELCOME || process.env.WELCOME || "false",
  GOODBYE: settings.GOODBYE || process.env.GOODBYE || "false",
  ADMIN_ACTION: settings.ADMIN_ACTION || process.env.ADMIN_ACTION || "false",
  version: process.env.version || "2.0.1",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Asia/Karachi",

  // ========================
  // 📊 LOGGING & DEBUGGING
  // ========================
  LOGGING_ENABLED: process.env.LOGGING_ENABLED || "false",

  // ========================
  // ⏳ SYSTEM VARIABLES
  // ========================
  wait: "Please wait...",
  BOTCAHX_API_KEY: global.btc,

  // ========================
  // 🖼️ THUMBNAIL & ASSETS
  // ========================
  thumbnailutama: "https://files.catbox.moe/16i1l7.jpg",

  // ========================
  // 🔗 SOCIAL LINKS
  // ========================
  instagramowner: "https://instagram.com/arslanmdofficial",
  
  // ========================
  // 📸 MENU CATEGORY IMAGES
  // ========================
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg"
  }
};
