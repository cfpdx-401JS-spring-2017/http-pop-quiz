const path = require('path');
const fs = require('fs');

function index(req, res) {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, data) => {
    res.end(data);
  });
}

module.exports = index;