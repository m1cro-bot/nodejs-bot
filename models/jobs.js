'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobs = sequelize.define('jobs', {
    job_id: DataTypes.STRING,
    posisi: DataTypes.STRING,
    deskrisi: DataTypes.STRING,
    experied: DataTypes.DATE,
    pelamar: DataTypes.INTEGER
  }, {});
  jobs.associate = function(models) {
    // associations can be defined here
  };
  return jobs;
};