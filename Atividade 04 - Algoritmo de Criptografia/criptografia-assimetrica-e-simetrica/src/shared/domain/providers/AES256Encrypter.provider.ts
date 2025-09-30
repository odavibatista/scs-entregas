import {
  AES256EncrypterDecryptDTO,
  AES256EncrypterEncryptDTO,
} from '../dtos/providers/AES256Encrypter.provider.dto';

export interface AES256EncrypterProviderInterface {
  encrypt(data: AES256EncrypterEncryptDTO): string;
  decrypt(data: AES256EncrypterDecryptDTO): string;
}