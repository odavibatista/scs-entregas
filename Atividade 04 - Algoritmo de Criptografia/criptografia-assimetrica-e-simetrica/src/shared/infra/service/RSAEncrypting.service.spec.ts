import { Test, TestingModule } from '@nestjs/testing';
import { AES256EncryptingService } from './AES-256Encrypting-service.service';

describe('EncryptingServiceService', () => {
  let service: AES256EncryptingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AES256EncryptingService],
    }).compile();

    service = module.get<AES256EncryptingService>(AES256EncryptingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
