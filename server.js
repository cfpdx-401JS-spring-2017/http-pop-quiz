const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send(`{ name: 'super cat', type: 'top secret' }`)
  next()
})

app.get('/cat.html', function (req, res) {
  res.send(`<h1>Super Cat FTW!</h1>`)
})

app.listen(3000, function () {
  console.log('Listening on port 3000');
})