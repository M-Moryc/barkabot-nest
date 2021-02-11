//import { Message } from 'discord.js'; //message type doesnt currently have bulkDelete function defined for some reason.

async function purge(message, limit) {
  limit = parseInt(limit);
  message.channel.bulkDelete(limit + 1).catch((err) => {
    console.log(err);
    return message.reply('An error occurred!');
  });
}

export { purge };
