import IMatch from '../Interfaces/matches/IMatch';
import Match from '../database/models/MatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import Team from '../database/models/TeamModel';
import { ServiceMessage } from '../Interfaces/ServiceResponse';
import IMatchGoal from '../Interfaces/matches/IMatchGoal';
import IMatchCreate from '../Interfaces/matches/IMatchCreate';

export default class MatchModel implements IMatchModel {
  private model = Match;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam' },
        { model: Team, as: 'awayTeam' },
      ],
    });
    return dbData;
  }

  async getFilter(inProgress: boolean): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'homeTeam' },
        { model: Team, as: 'awayTeam' },
      ],
    });
    return dbData;
  }

  async finishMatch(id: number): Promise<ServiceMessage> {
    const match = await this.model.findByPk(id);
    if (!match) {
      return { message: 'Match not found' };
    }
    match.inProgress = false;
    await match.save();
    return { message: 'Finished' };
  }

  async updateMatchId(id: number, updatedMatch: IMatchGoal): Promise<IMatch | null> {
    const [rowsUpdated] = await this.model.update(updatedMatch, { where: { id } });
    if (rowsUpdated === 0) {
      return null;
    }
    const updated = await this.model.findByPk(id);
    return updated;
  }

  async createMatch(matchData: IMatchCreate): Promise<IMatch> {
    const createdMatch = await this.model.create(matchData);
    return createdMatch;
  }
}
