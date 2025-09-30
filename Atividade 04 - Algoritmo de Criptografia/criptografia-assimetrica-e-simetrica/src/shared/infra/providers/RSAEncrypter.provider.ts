
import { privateDecrypt, publicEncrypt } from 'crypto';
import { RSAEncrypterDecryptDTO, RSAEncrypterEncryptDTO } from 'src/shared/domain/dtos/providers/RSAEncrypter.provider';
import { RSAEncrypterProviderInterface } from 'src/shared/domain/providers/RSAEncrypter.provider';

export class RSAEncrypterProvider implements RSAEncrypterProviderInterface {
    private readonly algorithm: string;
    private readonly publicKey: string;
    private readonly secretKey: string;
  
    constructor(publicKey: string, secret: string) {
      this.algorithm = 'rsa';
      this.publicKey = publicKey;
      this.secretKey = secret;
    }

    public encrypt({ publicKey, content }: RSAEncrypterEncryptDTO): string {
      const encrypted = publicEncrypt(publicKey, Buffer.from(content))

      return encrypted.toString();
    }
  
    public decrypt({ content, secret }: RSAEncrypterDecryptDTO): string {
      const decrypted = privateDecrypt(this.secretKey, Buffer.from(content, 'hex'));
  
      return decrypted.toString();
    }

    sign(privateKey: string, message: string): string {
      const sign = privateDecrypt(privateKey, Buffer.from(message));
      return sign.toString('hex');
    }

    verify(publicKey: string, message: string, signature: string): boolean {
      const verify = publicEncrypt(publicKey, Buffer.from(message));
      return verify.toString('hex') === signature;
    }
}