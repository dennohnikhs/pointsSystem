const mysql = require("mysql");
const { makeDb } = require("mysql-async-simple");

var db_config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "point_system",
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();

const db = makeDb();

async function executeQuery(sql, fields) {
  try {
    await db.connect(connection);
  } catch (e) {
    console.log("iko error bwana producer", { error: e });
  }

  returnObj = null;

  try {
    returnObj = await db.query(connection, sql, fields);
  } catch (e) {
    // handle exception
  } finally {
    function handleDisconnect() {
      connection = mysql.createConnection(db_config); // Recreate the connection, since
      // the old one cannot be reused.

      connection.connect(function (err) {
        // The server is either down
        if (err) {
          // or restarting (takes a while sometimes).
          console.log("error when connecting to db:", err);
          setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        } // to avoid a hot loop, and to allow our node script to
      }); // process asynchronous requests in the meantime.
      // If you're also serving http, display a 503 error.
      connection.on("error", function (err) {
        console.log("db error", err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          // Connection to the MySQL server is usually
          handleDisconnect(); // lost due to either server restart, or a
        } else {
          // connnection idle timeout (the wait_timeout
          throw err; // server variable configures this)
        }
      });
    }
  }

  return returnObj;
}

module.exports = {
  connection,
  executeQuery,
};
