const init = (app) => {
  app.get('/status.html', (req, res) => {
    res.status(200).send('OK');
  });
};

module.exports = init;
