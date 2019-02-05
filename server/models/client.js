'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    //username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
    
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Commande, {
      foreignKey: 'id',
      as: 'clientCommands',
    });
  };
  return Client;
};