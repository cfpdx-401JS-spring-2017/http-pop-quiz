const parsedUrl = require('url').parse;
const fs = require('fs');
const path = require('path');

const routes = {
  'cat': cat,
  '/': index
};

function app(req, res) {
  console.log(req.method, req.url);

  const url = parsedUrl(req.url, true);
  req.query = url.query;

  res.setHeader('Content-Type', 'application/json');
  const route = routes[url.pathname];
  route(req, res);
}

function cat(req, res) {
  const cat = { name: 'super cat', type: 'top secret' };
  const jsonCat = JSON.stringify(cat);
  res.end(jsonCat);
}

function index(req, res) {
  const filePath = path.join(__dirname, 'cat.html');
  fs.readFile(filePath, (err, page) => {
    if (err) res.end(err);
    res.end(page);
  });
}

module.exports = app;