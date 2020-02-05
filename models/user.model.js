const Sequelize = require("sequelize");

module.exports = Sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(60)
  },
  email: {
    type: Sequelize.STRING(60)
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE
});
