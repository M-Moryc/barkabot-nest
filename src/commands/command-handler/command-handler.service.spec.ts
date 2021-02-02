import { Test, TestingModule } from '@nestjs/testing';
import { CommandHandlerService } from './command-handler.service';

describe('CommandHandlerService', () => {
  let service: CommandHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandHandlerService],
    }).compile();

    service = module.get<CommandHandlerService>(CommandHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
