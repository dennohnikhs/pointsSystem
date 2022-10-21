const { executeQuery } = require("../../database/connection");

class SessionPoints {
  static async newSession(sessionId, studentId, points) {
    try {
      await executeQuery(
        "INSERT INTO session_points (session_id,student_id,points) SELECT ((SELECT se.id FROM session se LIMIT 1),s.id,100 FROM student s LIMIT 1)"
      ),
        [sessionId, studentId, points];
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = SessionPoints;
