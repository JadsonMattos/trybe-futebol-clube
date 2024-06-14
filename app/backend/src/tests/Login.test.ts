// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';

// import { Response } from 'superagent';
// import UserModel from '../models/UserModel';
// import { invalidEmail, invalidPassword, role, userRegistered, validLoginBody, withoutEmail, withoutPassword } from './mocks/User.mock';
// import tokenJwt from '../utils/tokenJwt';
// import Validations from '../middlewares/validations';
// import userModel from '../database/models/UserModel'

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('/login', () => {
//   let chaiHttpResponse: Response;
//   let login: Response;

//   beforeEach(async () => {
//     sinon.stub(UserModel.prototype, 'findByEmail').resolves(userRegistered as any);
//     sinon.stub(tokenJwt, 'sign').returns('validToken');
//     sinon.stub(Validations, 'validateLogin').returns();
//     sinon.stub(UserModel.prototype, 'findByEmail').resolves(role as userModel);
//   });

//   afterEach(() => {
//     sinon.restore();
//   })

//   it('retorna um token quando o login é feito', async function() {
//     chaiHttpResponse = await chai.request(app)
//       .post('/login')
//       .send(validLoginBody);
//     expect(chaiHttpResponse.status).to.equal(200);
//     expect(chaiHttpResponse.body).to.have.key('token');
//   });

//   it('Se o login não tiver o campo "email"', async function() {
//     chaiHttpResponse = await chai.request(app)
//       .post('/login')
//       .send(withoutEmail);
//     expect(chaiHttpResponse.status).to.equal(400);
//     expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//   });

//   it('Se o login não tiver o campo "password"', async function() {
//     chaiHttpResponse = await chai.request(app)
//       .post('/login')
//       .send(withoutPassword);
//     expect(chaiHttpResponse.status).to.equal(400);
//     expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
//   });

//   it('se o login for feito com um email inválido', async function() {
//     chaiHttpResponse= await chai.request(app).post('/login')
//       .send(invalidEmail);
//     expect(chaiHttpResponse.status).to.equal(401);
//     expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Invalid email or password' });
//   });

//   it('se o login for feito com um password inválido', async function() {
//     chaiHttpResponse= await chai.request(app).post('/login')
//       .send(invalidPassword);
//     expect(chaiHttpResponse.status).to.equal(401);
//     expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Invalid email or password' });
//   });

//   it('Retorna a role do usuário para um usuário autenticado', async () => {
//     login = await chai.request(app).post('/login').send({
//       email: 'admin@admin.com',
//       password: 'secret_admin',
//     });
//     const token = login.body.token;
//     login = await chai.request(app).get('/login/role').set('Authorization', `Bearer ${token}`);
//     expect(login.status).to.equal(200);
//     expect(login.body).to.have.property('role');
//     expect(login.body.role).to.equal('admin');
//   });

//   // it('Seu sub-teste', () => {
//   //   expect(false).to.be.eq(true);
//   // });
// });
