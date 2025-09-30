import { RSAEncrypterDecryptDTO, RSAEncrypterEncryptDTO } from '../dtos/providers/RSAEncrypter.provider';

export interface RSAEncrypterProviderInterface {
  encrypt(data: RSAEncrypterEncryptDTO): string;
  decrypt(data: RSAEncrypterDecryptDTO): string;
  sign(privateKey: string, message: string): string;
  verify(publicKey: string, message: string, signature: string): boolean;
}