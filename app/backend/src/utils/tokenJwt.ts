import { JwtPayload, Secret, SignOptions, verify, sign } from 'jsonwebtoken';

export default class tokenJwt {
  private static secret: Secret = process.env.JWT_SECRET || '';

  private static jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  static sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  static verify(token: string): JwtPayload | string {
    try {
      const payLoad = verify(token, this.secret) as JwtPayload;
      return payLoad;
    } catch (error) {
      return 'Token must be a valid token';
    }
  }
}
