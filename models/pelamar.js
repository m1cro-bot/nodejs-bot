'use strict';
module.exports = (sequelize, DataTypes) => {
  const pelamar = sequelize.define('pelamar', {
    user_id: DataTypes.STRING,
    job_id: DataTypes.STRING
  }, {});
  pelamar.associate = function(models) {
    // associations can be defined here
  };
  return pelamar;
};