import { randomBytes } from 'crypto';
import { AES256KeyProviderInterface } from '../../domain/providers/AES256Key.provider';

export class AES256KeyProvider implements AES256KeyProviderInterface {
    constructor() {}
    
    public generateIV(): string {
        let iv = randomBytes(8);

        return iv.toString('hex');
    }

    public generateSecret(): string {
        let secret = randomBytes(16);

        return secret.toString('hex');
    }
}