'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admin', { 
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Username: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      Phone: {
        type: Sequelize.INTEGER,
        // allowNull defaults to true
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false
      },
     });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admin');
  }
};