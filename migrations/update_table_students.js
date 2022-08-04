const { executeQuery } = require("../src/database/connection");

async function updateStudentsTable() {
  try {
    let sql = `ALTER TABLE student
DROP COLUMN points;`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("student table updated successfully");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while updating student table",
    });
  }
}
module.exports = {
  updateStudentsTable,
};
