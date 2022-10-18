const { executeQuery } = require("../../database/connection");

class OffenseType {
  static async addOne(name, points) {
    try {
      await executeQuery(
        "INSERT INTO offense_type (name,points) VALUES (?,?)",
        [name, points]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async exists(name) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM offense_type WHERE name = (?)",
      [name]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async getAll() {
    const result = await executeQuery("SELECT * FROM offense_type", []);
    return result;
  }
}
module.exports = OffenseType;
