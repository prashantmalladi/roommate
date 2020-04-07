const path = require('path');
const handlebars = require('hbs');

const routes = require('./controllers');

const init = (app) => {
  app.set('views', path.join(__dirname + '/views'));
  app.set('view engine', '.hbs');
  app.engine('.hbs', handlebars.__express);

  app.get('/status.html', (req, res) => {
    res.status(200).send('OK');
  });

  app.use(routes);
};

module.exports = init;
