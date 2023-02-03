const TelegramBot = require("node-telegram-bot-api");

console.log("Obteniendo los inputs de la action");
const telegramChatId = process.argv[0];
const telegramToken = process.argv[1];
const commit_author = process.argv[2];

console.log("Estos son los inputs recibidos:");
console.log(telegramChatId, telegramToken, commit_author);

console.log("Procediendo a enviar el mensaje a telegram");
const bot = new TelegramBot(telegramToken, { polling: true });

async function sendMessageForCommit() {
  try {
    let message = `${commit_author} acaba de realizar un commit en el repositorio`;
    await bot.sendMessage(telegramChatId, message);
    console.log("Mensaje enviado satisfactoriamente");
  } catch (e) {
    process.exist(1);
  }
  process.exit(0);
}

sendMessageForCommit();
