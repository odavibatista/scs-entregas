import { generateKeyPair } from 'crypto';
import { RSAKeyProviderInterface } from 'src/shared/domain/providers/RSAKey.provideR';

export class RSAKeyProvider implements RSAKeyProviderInterface {
    constructor() {}
    
    public generateKeyPair(): Promise<{ publicKey: string; privateKey: string }> {
      return new Promise((resolve, reject) => {
        generateKeyPair(
          'rsa',
          {
            modulusLength: 2048, // Key length
            publicKeyEncoding: { type: 'spki', format: 'pem' }, // Public key encoding
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' }, // Private key encoding
          },
          (err, publicKey, privateKey) => {
            if (err) reject(err);
            resolve({ publicKey, privateKey });
          }
        );
      });
    }
}