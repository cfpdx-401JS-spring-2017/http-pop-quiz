const fs = require('fs');
const path = require('path');

const superCat = JSON.stringify({
    name: 'super cat', type: 'top secret'
});

const catHtml = path.join(__dirname, 'cat.html');

module.exports = function (req, res) {
    if (req.method !== 'GET') {
        res.statusCode = 404;
        res.statusMessage = 'why u no cat?';
        res.end('<h2>please cat</h2>');
        return;
    }

    if (req.url.startsWith('/cat')) {
        res.setHeader('Content-Type', 'application/json');
        res.end(superCat);
    }
    else {
        fs.createReadStream(catHtml).pipe(res);
    }
};