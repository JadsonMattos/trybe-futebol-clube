import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

// interface RequestWithUser extends Request {
//   user: { email: string, role: string };
// }

export default class UserController {
  constructor(private userService = new UserService()) { }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const serviceResponse = await this.userService.login(req.body);
    if (serviceResponse.status === 'NOT_FOUND') {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (serviceResponse.status === 'INVALID_DATA') {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async getUserRole(req: Request, res: Response): Promise<Response> {
    const { email } = req.body.user;
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ role: user.role });
  }
}
