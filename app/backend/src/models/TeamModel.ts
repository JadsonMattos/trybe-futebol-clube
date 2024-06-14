import ITeam from '../Interfaces/teams/ITeam';
import Team from '../database/models/TeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = Team;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => ({ id, teamName }));
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;
    const { teamName }: ITeam = dbData;
    return { id, teamName };
  }
}
