const { executeQuery } = require("../../database/connection");

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
}
module.exports = {
  Teacher,
};
