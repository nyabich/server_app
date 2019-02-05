//const Client = require('../models').Client;
const Commande =  require('../models').Commande;

module.exports = {
  create(req, res) {
    return Commande
      .create({
        state: true,
        idOwner: req.body.idOwner,
        Products: req.body.Products
      })
      .then(commande => res.status(201).send(commande))
      .catch(error => res.status(400).send(error));
  },
}

