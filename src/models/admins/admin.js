const { executeQuery } = require("../../database/connection");
const bcrypt = require("bcryptjs");

class Admin {
  static async addOne(name, email, phone_number, password) {
    try {
      await executeQuery(
        "INSERT INTO admin (name,email,phone_number,password) VALUES (?,?,?,?)",
        [name, email, phone_number, password]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async validateAdmin(email, password) {
    const result = await executeQuery(
      "SELECT email, password FROM admin WHERE email = (?)LIMIT 1",
      [email]
    );
    if (result.length > 0) {
      const admin = result[0];
      let passwordVerified = await bcrypt.compare(password, admin.password);
      console.log(passwordVerified);
      if (!passwordVerified) {
        return false;
      }
      delete admin.password;

      return admin;
    }
    return false;
  }
}
module.exports = Admin;
