import { Test, TestingModule } from '@nestjs/testing';
import { AES256KeysService } from './AES-256Keys.service';

describe('KeysService', () => {
  let service: AES256KeysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AES256KeysService],
    }).compile();

    service = module.get<AES256KeysService>(AES256KeysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
