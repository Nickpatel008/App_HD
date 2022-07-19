// Conenct

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("Curious_DB", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Authentication

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequlize is connected...");
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

// Database

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user")(sequelize, DataTypes);
db.subscription = require("../models/subscription")(sequelize, DataTypes);
db.question = require('../models/questionModel')(sequelize , DataTypes);
db.article = require('../models/articleModel')(sequelize , DataTypes);

// Sync

db.sequelize.sync({ force: false , alter : false }).then(() => {
  console.log("Sync Done...");
});

module.exports = db;
