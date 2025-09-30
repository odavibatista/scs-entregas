import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AES256EncryptingService } from '../shared/infra/service/AES-256Encrypting-service.service';
import { AES256KeysService } from '../shared/infra/service/AES-256Keys.service';
import { KeysController } from '../shared/infra/http/controllers/AES-256-Keys.controller';
import { AES256KeyProvider } from '../shared/infra/providers/AES256Key.provider';
import { RSAEncrypterProvider } from 'src/shared/infra/providers/AES256Encrypter.provider';
import { RSAEncryptingService } from 'src/shared/infra/service/RSAEncrypting-service.service';
import { RSAKeyProvider } from 'src/shared/infra/providers/RSAKey.provider';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [KeysController,],
  providers: [
    AES256EncryptingService,
    AES256KeysService,
    AES256KeyProvider,
    RSAEncrypterProvider,
    RSAEncryptingService,
    RSAKeyProvider,
  ],
})
export class AppModule {}
