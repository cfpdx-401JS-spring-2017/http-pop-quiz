const parseUrl = require('url').parse;

const notFound = require('./routes/notFound');
const cat = require('./routes/cat');
const index = require('./routes/index');

const routes = {
  'cat': cat,
  'notFound': notFound,
  '/cat.html': index,
  '/': index,
};

function app(req, res) {
  const url = parseUrl(req.url, true);
  req.query = url.query;

  res.setHeader('Content-Type', 'application/JSON');
  const route = routes[url.pathname] || index;
  route(req, res);
}

module.exports = app;