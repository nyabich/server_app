const gestionnaire = require('../models').gestionnaire;

module.exports = {
  create(req, res) {
    return gestionnaire
      .create({
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        id: req.body.id
      })
      .then(gest => res.status(201).send(gest))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return gestionnaire 
       .all()
       .then(gest => res.status(200).send(gest))
       .catch(error => res.status(400).send(error));
  }
};