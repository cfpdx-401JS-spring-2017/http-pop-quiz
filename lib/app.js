const parseUrl = require('url').parse;

const cat = require('./routes/cat');
const notFound = require('./routes/not-found');

const routes = { 'cat': cat };


function app(req, res) {
  const url = parseUrl(req.url, true);
  const splitUrl = url.pathname.slice(1).split('/');
  const path = splitUrl[0];
  const route = routes[path] || notFound;

  res.setHeader('Content-Type', 'application/json');
  route(req, res);
}

module.exports = app;