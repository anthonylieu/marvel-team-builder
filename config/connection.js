// Import the Sequelize library

const Sequelize = require("sequelize");
// Import the dotenv library and load environment variables from a .env file

require("dotenv").config();

let sequelize;

// Check if there's a JAWSDB_URL environment variable (used in production on Heroku).
if (process.env.JAWSDB_URL) {
  // If there is, create a Sequelize connection using the JAWSDB_URL value
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If there isn't, create a Sequelize connection using the other environment variables
  sequelize = new Sequelize(
    process.env.DB_NAME, // The name of the database to connect to
    process.env.DB_USER, // The username to use for authentication
    process.env.DB_PASSWORD, // The password to use for authentication.
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
// Export the Sequelize connection so it can be used in other parts of the application
module.exports = sequelize;
