import { Injectable, Logger } from '@nestjs/common';
import { On, OnCommand, DiscordClient } from 'discord-nestjs';
import { Message } from 'discord.js';
import { CommandHandlerService } from './commands/command-handler/command-handler.service';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);
  private readonly commandHandler = new CommandHandlerService();

  constructor(private readonly discordClient: DiscordClient) {}

  @On({ event: 'ready' })
  onReady(): void {
    this.logger.log(`Logged in as ${this.discordClient.user.tag}!`);
  }

  @OnCommand({ name: '' })
  async onCommand(message: Message): Promise<void> {
    this.commandHandler.handleCommand(message);
  }
}
