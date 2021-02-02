import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { CommandHandlerService } from './commands/command-handler/command-handler.service';

@Module({
  imports: [BotModule],
  controllers: [AppController],
  providers: [AppService, CommandHandlerService],
})
export class AppModule {}
