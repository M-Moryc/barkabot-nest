import { Module } from '@nestjs/common';
import { DiscordModule } from 'discord-nestjs';
import { ConfigModule } from '@nestjs/config';
import { BotGateway } from '../bot-gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DiscordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      commandPrefix: 'b!',

      // and other discord options
    }),
  ],
  providers: [BotGateway],
})
export class BotModule {}
