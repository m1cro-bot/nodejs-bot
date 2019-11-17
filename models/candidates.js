'use strict';
module.exports = (sequelize, DataTypes) => {
  const candidates = sequelize.define('candidates', {
    user_id: DataTypes.STRING,
    ktp: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    alamat: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    pendidikan_terakhir: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    photo: DataTypes.STRING,
    photo_ktp: DataTypes.STRING,
    ijazah: DataTypes.STRING,
    cv: DataTypes.STRING,
    sertifikat: DataTypes.STRING,
    job_dilamar: DataTypes.INTEGER
  }, {});
  candidates.associate = function(models) {
    // associations can be defined here
  };
  return candidates;
};