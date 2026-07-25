export interface TokenPayload {
  sub: string;
  email: string;
  role: string;
}
export interface ITokenService {
  generateAccessToken(payload: TokenPayload): Promise<string>;
}

export const TOKEN_SERVICE = Symbol('TOKEN_SERVICE');
