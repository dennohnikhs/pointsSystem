const { executeQuery } = require("../../database/connection");

class Offense {
  static async addOne(offenseTypeId, studentId, comment) {
    try {
      await executeQuery(
        "INSERT INTO offense (offense_type_id,student_id,comment) VALUES (?,?,?,?)"
      ),
        [offenseTypeId, studentId, comment];
    } catch (error) {
      console.log(error);
    }
  }
  static async exists(teacherId) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM offense WHERE teacher_id = (?)",
      [teacherId]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async getAll() {
    const result = await executeQuery("SELECT * FROM offense", []);
    return result;
  }
}
module.exports = Offense;
