
const clientController = require('../controllers').client;
const cmdController = require('../controllers').commnande;
//const gestionnaireController =  require('../controllers').

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  app.get('/api/singleclient/:id', clientController.retrieve);
  app.post('/api/client', clientController.create);
  app.get('/api/client', clientController.list);
  app.post('/api/commande', cmdController.create);
};