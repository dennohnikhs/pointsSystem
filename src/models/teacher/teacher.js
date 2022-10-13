const { executeQuery } = require("../../database/connection");
const bcrypt = require("bcryptjs");

class Teacher {
  static async addOne(name, email, phone, password, role) {
    try {
      await executeQuery(
        "INSERT INTO teacher (name,email,phone_number,password,role) VALUES (?,?,?,?,?)",
        [name, email, phone, password, role]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async exists(phone) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM teacher WHERE phone_number = (?)",
      [phone]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }

  static async validateTeacher(email, password) {
    const result = await executeQuery(
      "SELECT * FROM teacher WHERE email = (?) LIMIT 1",
      [email]
    );
    if (result.length > 0) {
      const teacher = result[0];
      let passwordVerified = await bcrypt.compare(password, teacher.password);
      if (!passwordVerified) {
        return false;
      }

      delete teacher.password;
      return teacher;
    }
    return false;
  }

  static async getAllTeachers(email, password, name, phone_number) {
    await executeQuery("SELECT * FROM teacher", [
      email,
      password,
      name,
      phone_number,
    ]);

    if (result && result[0].existing_count > 0) {
      return result;
    }
    return false;
  }
}
module.exports = {
  Teacher,
};
