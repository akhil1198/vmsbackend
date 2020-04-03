'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('management', { 
      UUID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      mgmtUsername: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mgmtPhone: {                                                                //after the migrations are done, the tables will be created on the databse
        type: Sequelize.INTEGER,                                                  //now use controllers to insert or delete any data to/from the database
      },                                                                          //link all the controllers to the index.js file in the controllers folder.
      mgmtEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mgmtPassword: {
        type: Sequelize.STRING,
        allowNull: false
      },
     });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('management');
  }
};