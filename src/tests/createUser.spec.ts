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
  it('should create a user', async () => {
    const { app } = new DevicesApp();
    const res = await chai.request(app)
      .post('/signup').send(signUpForm);
    expect(res).to.have.status(201);
    expect(res.text).to.be.equal('User created successfully.');
  });

  it('should NOT create a user if username is already registered', async () => {
    const { app } = new DevicesApp();
    const res = await chai.request(app)
      .post('/signup').send(signUpForm);
    expect(res).to.have.status(400);
    expect(res.text).to.be.equal('Username already registered.');
  })
});