/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import DevicesApp from '../App';

chai.use(chaiHttp);

const signUpForm = {
  username: 'john.doe',
  password: 'JohnDoe#123'
};

describe('Flow: sign up', () => {
  xit('should create a user', async () => {
    const { app } = new DevicesApp();
    const res = await chai.request(app)
      .post('/signup').send(signUpForm);
    expect(res).to.have.status(200);
    expect(res.body.username).to.be.equal('john.doe');
  });

  xit('should NOT create a user if username is already registered', async () => {
    const { app } = new DevicesApp();
    const res = await chai.request(app)
      .post('/signup').send(signUpForm);
    expect(res).to.have.status(400);
    expect(res.text).to.be.equal('Username already in use.');
  })
});