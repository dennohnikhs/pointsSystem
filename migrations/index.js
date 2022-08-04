const { createAdminTable } = require("./create_table_admin");
const { createOffenceTable } = require("./create_table_offence");
const { createOffenceTypeTable } = require("./create_table_offence_type");
const { createSessionTable } = require("./create_table_session");
const { createSessionPoints } = require("./create_table_session_points");
const { createStudentsTable } = require("./create_table_student");
const { createTableTeacher } = require("./create_table_teacher");
const { updateStudentsTable } = require("./update_table_students");

(async () => {
  await createStudentsTable();
  await createOffenceTable();
  await createOffenceTypeTable();
  await createAdminTable();
  await createSessionTable();
  await createSessionPoints();
  await createTableTeacher();
  await updateStudentsTable();
})();
