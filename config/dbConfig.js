const mongoose = require("mongoose");
/**
 * @dbConnections - this function will connect the database to your project
 *
 */
function dbConnection() {
  return mongoose.connect(process.env.db_URL).then(() => {
    console.log("Database connection successful");
  });
}

module.exports = dbConnection;
