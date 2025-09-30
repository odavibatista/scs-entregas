import { Injectable } from '@nestjs/common';
import { AES256KeyProvider } from '../providers/AES256Key.provider';
import { GenerateKeysReturnDTO } from '../../domain/dtos/request/GenerateKeys.request.dto';

@Injectable()
export class AES256KeysService {
    constructor(
        private readonly keyProvider: AES256KeyProvider
    ) {}

    async generateKeys(): Promise<GenerateKeysReturnDTO> {
        return {
            iv: this.keyProvider.generateIV(),
            secret: this.keyProvider.generateSecret()
        }
    }
}
