import { ServiceMessage } from '../ServiceResponse';
import IMatch from './IMatch';
import IMatchCreate from './IMatchCreate';
import IMatchGoal from './IMatchGoal';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>
  getFilter(inProgress: boolean): Promise<IMatch[]>;
  finishMatch(id: number): Promise<ServiceMessage>;
  updateMatchId(id: number, updatedMatch: IMatchGoal): Promise<IMatch | null>;
  createMatch(matchData: IMatchCreate): Promise<IMatch>;
}
