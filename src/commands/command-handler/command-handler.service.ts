import { Injectable } from '@nestjs/common';
import { purge } from './purge';

@Injectable()
export class CommandHandlerService {
  handleCommand(message) {
    message.content = message.content.toLocaleLowerCase();
    const commandArray = message.content.match(/\s?[a-z]+/);
    if (!commandArray) return;
    const command = commandArray[0].trim();
    let params = message.content.split(/([^\s"]+|"[^"]*")+/);
    params.shift();
    params = params.filter((item) => {
      return item.replace(/\s+/, '') != '';
    });
    if (!commandArray) {
      return;
    }
    if (params) {
      params = params.map((param) => {
        return param.replace(/"/g, '');
      });
    }
    if (!this.commands[command]) {
      message.reply('unknown command');
      return;
    }
    this.commands[command](message, params);
  }

  commands = {
    //play: (message, params) => {play(message, params[0])},
    //roll: (message) => {roll(message)},
    //stop: (message) => {stop(message)},
    //skip: (message) => {skip(message)},
    //setupbarka: (message) => {schedule.scheduleJob({hour: 20, minute: 37}, () => {this.commands[play](message, 'barka')});console.log("setupdone"); message.delete();},
    //plan: (message) =>{plan(message, params)},
    purge: async (message, params) => {
      purge(message, params[1]);
    },
    syllabus: (message) => {
      message.reply('https://sylabusy.agh.edu.pl/pl/1/1/16/1/1/38/50');
    },
    //ar: (message) =>{setResponse(message, params)},
    say: (message) => {
      this.say(message);
    },
  };

  say(message) {
    const string = message.content.replace('say', '');
    message.channel.send(string);
    message.delete();
  }
}
