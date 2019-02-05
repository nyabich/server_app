'use strict';
module.exports = (sequelize, DataTypes) => {
  const gestionnaire = sequelize.define('gestionnaire', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  gestionnaire.associate = function(models) {
    // associations can be defined here
  };
  return gestionnaire;
};