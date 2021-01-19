const TelegramBot = require( "node-telegram-bot-api" );
const token = '12345678910:sdfasiwueiwueiuwehfuiwe'
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "Bienvenido", {
"reply_markup": {
    "keyboard": [["hola", "bye"], ["bailame"]]
    }
});
});
//Respuestas
bot.on('message', (msg) => {
var Hi = "hola";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hola");
    bot.sendPhoto(msg.chat.id,"img/hola.jpeg");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Bye amiguito");
}
var baile = "bailame";
if (msg.text.indexOf(baile) === 0) {
    bot.sendMessage(msg.chat.id, "Ahi te va mi bailecito");
    bot.sendVideo(msg.chat.id,"img/baile.mp4")
}
});

