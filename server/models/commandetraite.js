'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommandeTraite = sequelize.define('CommandeTraite', {
    dateTraitement: DataTypes.DATE
  }, {});
  CommandeTraite.associate = function(models) {
    CommandeTraite.belongsTo(models.Commande, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
      as:'idCommande'
    });
    CommandeTraite.belongsTo(models.gestionnaire, {
       foreignKey:'id',
       as: 'idGestionnaire'
    })
  };
  return CommandeTraite;
};