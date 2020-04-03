'use strict';
module.exports = (sequelize, DataTypes) => {
  const management = sequelize.define('management', {
    UUID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    mgmtUsername: {
      type: DataTypes.STRING,
      allowNull: false
    },                                                                              //scheme aka models in sequelize are created here and then
    mgmtPhone: {                                                                    //with the migrate command the tables are migrated to the database.
      type: DataTypes.INTEGER,                                                            
      // allowNull defaults to true
    },
    mgmtEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mgmtPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  management.associate = function(models) {
    // associations can be defined here
  };
  return management;
};