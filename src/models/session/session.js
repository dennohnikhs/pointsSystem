const { executeQuery } = require("../../database/connection");

class Session {
  static async AddOne(term, startDate, endDate) {
    try {
      await executeQuery(
        "INSERT INTO session (term,start_date,end_date) values (?,?,?)",
        [term, startDate, endDate]
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async exists(startDate) {
    const result = await executeQuery(
      "SELECT COUNT(*) As existing_count  FROM session WHERE start_date = (?)",
      [startDate]
    );
    console.log(result);
    if (result && result[0].existing_count > 0) {
      return true;
    }
    return false;
  }

  static async getAll() {
    const result = await executeQuery("SELECT * FROM session", []);
    return result;
  }
}
module.exports = Session;
