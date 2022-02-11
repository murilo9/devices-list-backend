/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import DevicesApp from '../App';

chai.use(chaiHttp);

describe('Flow: sign up', () => {
  it('should create a user', async () => {
    const { app } = new DevicesApp();
    const signUpForm = {
      username: 'john.doe',
      password: 'JohnDoe#123'
    };
    const res = await chai.request(app)
      .post('/signup').send(signUpForm);
    expect(res).to.have.status(201);
    expect(res.text).to.be.equal('User created successfully');
  });
});