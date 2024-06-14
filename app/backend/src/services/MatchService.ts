import MatchModel from '../models/MatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IMatch from '../Interfaces/matches/IMatch';
import IMatchGoal from '../Interfaces/matches/IMatchGoal';
import IMatchCreate from '../Interfaces/matches/IMatchCreate';

interface message {
  message: string,
}

export default class MatchService {
  constructor(private matchModel: IMatchModel = new MatchModel()) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getFilter(inProgress: boolean): Promise<ServiceResponse<IMatch[]>> {
    const filteredMatches = await this.matchModel.getFilter(inProgress);
    return { status: 'SUCCESSFUL', data: filteredMatches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<message>> {
    const match = await this.matchModel.finishMatch(id);
    if (match.message) {
      return { status: 'SUCCESSFUL', data: match };
    }
    return { status: 'INVALID_DATA', data: match };
  }

  public async updateMatchId(id: number, updatedMatch: IMatchGoal)
    : Promise<ServiceResponse<IMatch | message>> {
    const match = await this.matchModel.updateMatchId(id, updatedMatch);
    if (match) {
      return { status: 'SUCCESSFUL', data: match };
    }
    return { status: 'INVALID_DATA', data: { message: 'Match not found' } };
  }

  public async createMatch(matchData: IMatchCreate): Promise<ServiceResponse<IMatch>> {
    const createdMatch = await this.matchModel.createMatch(matchData);
    return { status: 'CREATED', data: createdMatch };
  }
}
