import { generateKeyPairSync } from 'crypto';
import { publicEncrypt, privateDecrypt } from 'crypto';

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: ''
  }
});

console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);

const message = 'Vamos usar assimétrica com RSA!';
const encryptedMessage = publicEncrypt(publicKey, Buffer.from(message));

console.log('Encrypted Message:', encryptedMessage.toString('base64'));

const decryptedMessage = privateDecrypt(
  {
    key: privateKey,
    passphrase: ''
  },
  encryptedMessage
);

console.log('Decrypted Message:', decryptedMessage.toString());