const Client = require('../models').Client;
const Commande =  require('../models').Commande;

module.exports = {
  create(req, res) {
    return Client
      .create({
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        id: req.body.id
      })
      .then(client => res.status(201).send(client))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Client 
       .all()
       .then(clients => res.status(200).send(clients))
       .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Client
      .findById(req.params.id, {
        include: [{
          model: Commande,
          as: 'clientCommands',
        }],
      })
      .then(client => {
        if (!client) {
          return res.status(404).send({
            message: 'Aucun client avec cet jdentifiant',
          });
        }
        return res.status(200).send(client);
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error)
      }
        //res.status(400).send(error));
      )},
};