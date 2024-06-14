import IUser from '../Interfaces/users/IUser';
import User from '../database/models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = User;

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    const { id, password, username, role } = user;
    return { id, email, password, username, role };
  }
}
