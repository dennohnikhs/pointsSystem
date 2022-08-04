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
  try {
    await db.connect(connection);
  } catch (e) {
    console.log("an error occurred");
  }

  returnObj = null;

  try {
    returnObj = await db.query(connection, sql, fields);
  } catch (e) {
    // handle exception
  } finally {
  }

  return returnObj;
}

module.exports = {
  connection,
  executeQuery,
};
