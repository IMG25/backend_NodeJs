"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable("Cars", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(40)
      },
      type: {
        type: Sequelize.STRING(40)
      },
      vehicleNo: {
        type: Sequelize.INTEGER(10)
      },
      pricePerHour: {
        type: Sequelize.INTEGER(10)
      },
      contactNo: {
        type: Sequelize.INTEGER(15)
      },
      address: {
        type: Sequelize.STRING(250)
      },
      photo: {
        type: Sequelize.STRING(250)
      },

      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable("Cars");
  }
};
