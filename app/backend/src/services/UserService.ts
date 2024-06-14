import * as bcrypt from 'bcryptjs';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import IUser, { ILogin } from '../Interfaces/users/IUser';
import { IToken } from '../Interfaces/IToken';
import tokenJwt from '../utils/tokenJwt';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService = tokenJwt,
  ) { }

  public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const { email, password } = data;

    if (!email || !password) {
      return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
    }

    const user = await this.userModel.findByEmail(email);
    if (user) {
      if (!bcrypt.compareSync(data.password, user.password)) {
        return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
      }
      const emailWithout = user as IUser;
      const token = this.jwtService.sign({ email: emailWithout.email });
      return { status: 'SUCCESSFUL', data: { token } };
    }
    return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.userModel.findByEmail(email);
    return user;
  }
}
