import { Model, QueryInterface, DataTypes } from 'sequelize';
import ITeam from '../../Interfaces/teams/ITeam';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<ITeam>>('teams', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'team_name',
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('teams');
  },
};