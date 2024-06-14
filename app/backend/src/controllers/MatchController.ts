import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(private matchService = new MatchService()) { }

  public async getAllMatches(req: Request, res: Response) {
    const serviceResponse = await this.matchService.getAllMatches();
    res.status(200).json(serviceResponse.data);
  }

  public async getFilter(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const where = inProgress === 'true';
      const serviceResponse = await this.matchService.getFilter(where);
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    const serviceResponse = await this.matchService.getAllMatches();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const serviceResponse = await this.matchService.finishMatch(Number(id));
    return res.status(mapStatusHTTP(serviceResponse.status)).json({
      message: serviceResponse.data });
  }

  public async updateMatchId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updatedMatch = req.body;
    const serviceResponse = await this.matchService.updateMatchId(Number(id), updatedMatch);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async createMatch(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    if (!homeTeamId || !awayTeamId || !homeTeamGoals || !awayTeamGoals) {
      return res.status(400).json({ message: 'All fields must be provided' });
    }

    const serviceResponse = await this.matchService.createMatch({
      homeTeamId: parseInt(homeTeamId, 10),
      awayTeamId: parseInt(awayTeamId, 10),
      homeTeamGoals: parseInt(homeTeamGoals, 10),
      awayTeamGoals: parseInt(awayTeamGoals, 10),
      inProgress: true,
    });
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
