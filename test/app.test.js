const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const app = require('../lib/app');

const request = chai.request(app);

it('returns super cat', () => {
    return request.get('/cat')
        .then(res => res.body)    
        .then(cat => {
            assert.deepEqual(cat, {
                name: 'super cat',
                type: 'top secret'
            });
        });
});
