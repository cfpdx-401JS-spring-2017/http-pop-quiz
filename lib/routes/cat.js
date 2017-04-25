const responseCat = JSON.stringify({ name: 'super cat', type: 'top secret' });

module.exports = function cat(req, res) {
  res.end(responseCat);
};