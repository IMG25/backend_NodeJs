const Sequelize = require("sequelize");

module.exports = Sequelize.define("Car", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    content: Sequelize.STRING(40)
  }
});
