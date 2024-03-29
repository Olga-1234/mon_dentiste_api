require("dotenv").config();

const databaseConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "olgita",
  password: process.env.DB_PASSWORD || "KbgZedOmn@1234",
  database: process.env.DB_DATABASE || "mon_dentiste_DB",
  
  // host: "localhost",
  // user: "olgita",
  // password: "KbgZedOmn@1234",
  // database: "DB_MON_DENTISTE",
   dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 100000,
  },
};
module.exports = {
  development: databaseConfig,
  test: databaseConfig,
  production: databaseConfig,
};
