const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const fs = require('fs');

const app = require('../lib/app');

chai.use(chaiHttp);

describe('app', () => {

  const request = chai.request(app);

  it('sends cat object at /cat', () => {
    const cat = { name: 'super cat', type: 'top secret' };
    const jsonCat = JSON.stringify(cat);
    request.get('/cat')
        .end(jsonCat);
  });
});