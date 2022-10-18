const mysql = require("mysql");
const { makeDb } = require("mysql-async-simple");

let connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "point_system",
});

const db = makeDb();

async function executeQuery(sql, fields) {
  returnObj = null;

  try {
    // await db.connect(connection);
    returnObj = await db.query(connection, sql, fields);
  } catch (e) {
    console.log("an error occurred", e);
  }

  return returnObj;
}

module.exports = {
  connection,
  executeQuery,
};
