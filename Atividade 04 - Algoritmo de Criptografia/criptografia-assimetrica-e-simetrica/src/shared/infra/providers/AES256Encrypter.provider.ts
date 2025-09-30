import { AES256EncrypterDecryptDTO, AES256EncrypterEncryptDTO } from '../../domain/dtos/providers/AES256Encrypter.provider.dto'
import { createCipheriv, createDecipheriv } from 'crypto';
import { AES256EncrypterProviderInterface } from '../../domain/providers/AES256Encrypter.provider';

export class RSAEncrypterProvider implements AES256EncrypterProviderInterface {
    private readonly algorithm: string;
    private readonly iv: Buffer;
    private readonly secret: string;
  
    constructor(iv: string, secret: string) {
      this.algorithm = 'aes-256-cbc';
      this.iv = Buffer.from(iv);
      this.secret = secret;
    }
  
    public encrypt({ content, secret }: AES256EncrypterEncryptDTO): string {
      const cipher = createCipheriv(
        this.algorithm,
        Buffer.from(secret || this.secret),
        this.iv,
      );
  
      const encrypted = Buffer.concat([cipher.update(content), cipher.final()]);
  
      const encryptedPayload = encrypted.toString('hex');
  
      return encryptedPayload;
    }
  
    public decrypt({ content, secret }: AES256EncrypterDecryptDTO): string {
      const decipher = createDecipheriv(
        this.algorithm,
        secret || this.secret,
        this.iv,
      );
  
      const decrypted = Buffer.concat([
        decipher.update(Buffer.from(content, 'hex')),
        decipher.final(),
      ]);
  
      return decrypted.toString();
    }
}