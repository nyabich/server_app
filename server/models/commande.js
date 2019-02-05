'use strict';
module.exports = (sequelize, DataTypes) => {
  const Commande = sequelize.define('Commande', {
    idOwner: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    Products: DataTypes.JSON
  }, {});
  Commande.associate = function(models) {
    Commande.belongsTo(models.Client, {
      foreignKey: 'id',
      //onDelete: 'CASCADE',
      as:'idClient'
    });
  };
  return Commande;
};