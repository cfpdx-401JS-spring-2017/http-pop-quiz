const parseUrl = require('url').parse;
const fs = require('fs');
const path = require('path');

function getIndex(req, res) {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        res.end(data);
    });
}

function getCat(req, res) {
    const filePath = path.join(__dirname, 'cat.json');
    fs.readFile(filePath, (err, data) => {
        cats = JSON.parse(data);
        res.end(cats);
    });
}

const routes = {
    '/': getIndex,
    '/index.html': getIndex,
    '/cat.json': getCat,
};

function notFound(req, res) {
    res.statusCode = 404;
    res.statusMessage = `${req.url} why u no cat?`;
    res.end('<h2>please cat</h2>');
}

function app(req, res) {
    const url = parseUrl(req.url, true);
    req.query = url.query;
    res.setHeader('Content-Type', 'text/html');
    const route = routes['/' + url.pathname.split('/')[1] || notFound];
    route(req, res);
}

module.exports = app;