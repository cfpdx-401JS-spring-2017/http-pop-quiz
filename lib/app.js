const fs = require('fs');
const path = require('path');
const parseUrl = require('url').parse;



   
   function getCat(req, res) {
    const name = req.nameQueryPath || 'Cat';
    let cat = `{ name: 'super cat', type: 'top secret' }`;
    res.end(cat);
}

function getIndex(req, res) {
    const filePath = path.join(__dirname, 'cat.html'); //This the same as the path.dirname() of the __filename
    const content = `<h1>Super Cat FTW!</h1>`;
    res.end(content);
    });





    const routes = {
        '/cat': getCat,

    };


// function getCat(request, response) {
//     request.on('error', function (err) {
//         console.error(err);
//         response.statusCode = 400;
//         response.end();
//     });
//     response.on('error', function (err) {
//         console.error(err);
//     });
//     if (request.method === 'GET' && request.url === '/cat') {
//         request.pipe(response);
//     } else {
//         response.statusCode = 404;
//         response.end();
//     }
