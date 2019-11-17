'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      user_id: {
        type: Sequelize.STRING(20),
        unique: true
      },
      ktp: {
        type: Sequelize.INTEGER(16)
      },
      first_name: {
        type: Sequelize.STRING(50)
      },
      last_name: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      tempat_lahir: {
        type: Sequelize.STRING(255)
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      alamat: {
        type: Sequelize.STRING(255)
      },
      no_hp: {
        type: Sequelize.INTEGER(13)
      },
      pendidikan_terakhir: {
        type: Sequelize.STRING(255)
      },
      jurusan: {
        type: Sequelize.STRING(255)
      },
      photo: {
        type: Sequelize.STRING(20)
      },
      photo_ktp: {
        type: Sequelize.STRING(20)
      },
      ijazah: {
        type: Sequelize.STRING(20)
      },
      cv: {
        type: Sequelize.STRING(20)
      },
      sertifikat: {
        type: Sequelize.STRING(20)
      },
      job_dilamar: {
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
    return queryInterface.dropTable('candidates');
  }
};