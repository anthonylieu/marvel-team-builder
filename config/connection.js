// Import the Sequelize library
// Import the dotenv library and load environment variables from a .env file

const Sequelize = require("sequelize");
// Check if there's a JAWSDB_URL environment variable (used in production on Heroku).

require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
