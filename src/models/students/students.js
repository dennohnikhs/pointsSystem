const { executeQuery } = require("../../database/connection");

class Student {
  static async addOne(studentName, admissionNumber, className, streamName) {
    try {
      await executeQuery(
        "INSERT INTO student (name,admission_number,class,stream) VALUES (?,?,?,?)",
        [studentName, admissionNumber, className, streamName]
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async exists(admissionNumber) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM student WHERE admission_number  = ?",
      [admissionNumber]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
}
module.exports = {
  Student,
};
