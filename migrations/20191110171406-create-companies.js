'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies', {
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
      nama_perusahaan: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      alamat: {
        type: Sequelize.STRING(255)
      },
      no_hp: {
        type: Sequelize.INTEGER(13)
      },
      jumlah_karyawan: {
        type: Sequelize.INTEGER(11)
      },
      deskripsi: {
        type: Sequelize.STRING(255)
      },
      logo: {
        type: Sequelize.STRING(11)
      },
      photo: {
        type: Sequelize.STRING(11)
      },
      jam_buka: {
        type: Sequelize.TIME
      },
      jam_tutup: {
        type: Sequelize.TIME
      },
      hari_kerja: {
        type: Sequelize.STRING(255)
      },
      pakaian: {
        type: Sequelize.STRING(255)
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
    return queryInterface.dropTable('companies');
  }
};