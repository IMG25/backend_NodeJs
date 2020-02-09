const Sequelize = require("sequelize");

const sequelize = new Sequelize("IM_Car", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
global.sequelize = sequelize;
