const pool = require("../../db/db_config");
const bcrypt = require("bcryptjs");

const getStaffs = async () => {
  const staffs = await pool.query(`SELECT * FROM staffs`);
  return staffs.rows;
};

const registration = async ({
  username,
  birth_date,
  gender,
  branch,
  password,
  repeat_password,
}) => {
  const staffs = await getStaffs();

  const foundedStaff = staffs.find((s) => s.username === username);

  if (foundedStaff) return { msg: "This staff already exists" };

  if (repeat_password !== password) {
    return { msg: "Password weren't matched!" };
  }

  const pswHash = await bcrypt.hash(password, 12);

  await pool.query(
    `INSERT INTO staffs(username, birth_date, gender, branch, password) VALUES($1,$2,$3,$4,$5)`,
    [username, birth_date, gender, branch, pswHash]
  );

  return { msg: "You're successfully registrated as a staff" };
};

module.exports = {
  getStaffs,
  registration,
};
