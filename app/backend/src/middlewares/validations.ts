import { NextFunction, Request, Response } from 'express';
import tokenJwt from '../utils/tokenJwt';
import Team from '../database/models/TeamModel';

class Validations {
  private model = Team;
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }

  static async validateToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const tokenTwo = token.split(' ')[1];
    const validToken = await tokenJwt.verify(tokenTwo);
    if (validToken === 'Token must be a valid token') {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    req.body.user = validToken;
    next();
  }

  static async validateMatches(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422).json(
        { message: 'It is not possible to create a match with two equal teams' },
      );
    }
    const homeTeamExists = await Team.findByPk(homeTeamId);
    const awayTeamExists = await Team.findByPk(awayTeamId);

    if (!homeTeamExists || !awayTeamExists) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    next();
  }
}

export default Validations;
