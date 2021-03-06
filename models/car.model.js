const Sequelize = require("sequelize");
const sequelize = require("../database/connection");
module.exports = sequelize.define("Car", {
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
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  contactNo: {
    type: Sequelize.INTEGER(15)
  },
  address: {
    type: Sequelize.STRING(250)
  },
  photo: {
    type: Sequelize.STRING(250)
  }
});
