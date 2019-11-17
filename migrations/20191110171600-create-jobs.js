'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      user_id: {
        type: Sequelize.STRING(20)
      },
      job_id: {
        type: Sequelize.STRING(20),
        unique: true
      },
      posisi: {
        type: Sequelize.STRING(255)
      },
      deskrisi: {
        type: Sequelize.STRING(255)
      },
      experied: {
        type: Sequelize.DATE
      },
      jumlah_pelamar: {
        type: Sequelize.INTEGER(11)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jobs');
  }
};