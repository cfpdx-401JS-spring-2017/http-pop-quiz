function notFound(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 404;
  res.statusMessage = 'Why u no cat?';
  const responseMessage = '<h2>please cat</h2>';
  res.end(responseMessage);
}

module.exports = notFound;