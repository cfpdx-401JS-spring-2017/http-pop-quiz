const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../lib/app');

chai.use(chaiHttp);

describe('app', () => {

  const request = chai.request(app);

  it('gets a cat', done => {
    request.get('/cat').end((err, res) => {
      assert.equal(res.text, `{ name: 'super cat', type: 'top secret' }`);
      done();
    });
  });

  it('gets index', done => {
    request.get('/index').end((err, res) => {
      assert.match(res.text, /Super Cat FTW!/);
      done();
    });
  });

});