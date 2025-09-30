export interface RSAKeyProviderInterface {
    generateKeyPair(): Promise<{ publicKey: string; privateKey: string }>;
}