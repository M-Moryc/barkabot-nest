//import { Message } from 'discord.js'; //message type doesnt currently have bulkDelete function defined for some reason.

async function purge(message, limit) {
  limit = parseInt(limit);
  message.channel.bulkDelete(limit + 1).catch((err) => {
    console.log(err);
    if (err.code == 50034) {
      return message.reply('you can only remove messages from past 14 days');
    }
    return message.reply('An error occurred!');
  });
}

export { purge };
