const { executeQuery } = require("../src/database/connection");

async function createOffenceTable() {
  try {
    let sql = `create table if not exists offence(
        id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        teacher_id int(50) NOT NULL,
        offence_type_id int(20) NOT NULL,
        student_id int(50) NOT NULL,
        comment text NOT NULL,
        points_deducted double NOT NULL,
        week int(50) NOT NULL,
        created_at datetime(6) NOT NULL)`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("offence table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating offence table",
    });
  }
}
module.exports = {
  createOffenceTable,
};
