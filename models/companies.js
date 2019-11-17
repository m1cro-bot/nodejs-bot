'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    user_id: DataTypes.STRING,
    nama_perusahaan: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    jumlah_karyawan: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    logo: DataTypes.STRING,
    photo: DataTypes.STRING,
    jam_buka: DataTypes.TIME,
    jam_tutup: DataTypes.TIME,
    hari_kerja: DataTypes.STRING,
    pakaian: DataTypes.STRING
  }, {});
  companies.associate = function(models) {
    // associations can be defined here
  };
  return companies;
};