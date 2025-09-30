export interface AES256KeyProviderInterface {
    generateIV(): string;
    generateSecret(): string;
}