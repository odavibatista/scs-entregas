export interface RSAEncrypterEncryptDTO {
  publicKey: string;
  content: string;
  secret?: string;
}

export interface RSAEncrypterDecryptDTO {
  publicKey: string;
  content: string;
  secret?: string;
}