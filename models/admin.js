'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
   
    Username: { 
      type: DataTypes.STRING,
  
    },
    Phone: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    Email: {
      type: DataTypes.STRING,
   
    },
    Password: {
      type: DataTypes.STRING,
   
    }
  });
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};