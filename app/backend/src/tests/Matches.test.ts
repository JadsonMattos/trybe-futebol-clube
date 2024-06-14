// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');
// import { team, teams } from './mocks/Team.mock';

// import { app } from '../app';

// import { Response } from 'superagent';
// import MatchModel from '../models/MatchModel';
// import { allMatches } from './mocks/Match.mock';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('/matches', () => {
//   let chaiHttpResponse: Response;
//   beforeEach(async () => {
//     sinon.stub(MatchModel.prototype, 'findAll').resolves(allMatches as MatchModel[]);
//   });

//   afterEach(()=>{
//     (sinon.restore());
//   })

//   it('Retorna uma lista de todos os matches', async () => {
//     chaiHttpResponse = await chai.request(app).get('/matches');
//     expect(chaiHttpResponse.status).to.have.status(200);
//     expect(chaiHttpResponse.body).to.deep.equal(allMatches);
//   });

//   // it('Seu sub-teste', () => {
//   //   expect(false).to.be.eq(true);
//   // });
// });
