/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import MydriaApp from '../App';

chai.use(chaiHttp);

describe('Flow: sign in', () => {
  xit('should sign in', async () => {
    const { app } = new MydriaApp();
    const signInForm = {
      username: 'john.doe',
      password: 'JohnDoe#123',
    };
    const res = await chai.request(app)
      .post('/signin').send(signInForm);
    expect(res).to.have.status(200);
    expect(res.text).to.be.a.string;
  });
});