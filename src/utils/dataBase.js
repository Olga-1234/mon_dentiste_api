const sequilize = require("sequelize");
const databaseConfig = require("../config/databaseConfig");
const database = new sequilize(
  databaseConfig.development.database,
  databaseConfig.development.user,
  databaseConfig.development.password,
  {
    host: databaseConfig.development.host,
    dialect: databaseConfig.development.dialect,
    pool: {
      max: databaseConfig.development.pool.max,
      min: databaseConfig.development.pool.min,
      acquire: databaseConfig.development.pool.acquire,
      idle: databaseConfig.development.idle,
    },
  }
);
(async () => {
  try {
    await database.authenticate();
    console.log("connection has been established s");
  } catch (error) {
    console.log("une erreur de connection à la base de donnée", error);
  }
})();
module.exports = database;
