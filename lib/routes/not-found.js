module.exports = function notFound(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 404;
  res.statusMessage = 'why u no cat?';
  res.end('<h2>please cat</h2>');
};