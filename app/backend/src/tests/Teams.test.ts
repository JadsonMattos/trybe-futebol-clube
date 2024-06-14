import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { team, teams } from './mocks/Team.mock';

import { app } from '../app';
import TeamModel from '../database/models/TeamModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('/teams', () => {
  let chaiHttpResponse: Response;
  beforeEach(async () => {
    sinon.stub(TeamModel, 'findAll').resolves(teams as unknown as TeamModel[]);
    sinon.stub(TeamModel, 'findOne').resolves( team as unknown as TeamModel);
  });

  afterEach(()=>{
    (TeamModel.findAll as sinon.SinonStub).restore();
    (TeamModel.findOne as sinon.SinonStub).restore();
  })

  it('Retorna uma lista de todos os times', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(teams);
  });

  it('Retorna um team pelo seu ID', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/5');
    expect(chaiHttpResponse.status).to.have.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(team);
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
