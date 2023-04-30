const pool = require("../../db/db_config");
const bcrypt = require("bcryptjs");
const { sign, verify } = require("../../utils/jwt");

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
    return { msg: "Passwords weren't matched!" };
  }

  const pswHash = await bcrypt.hash(password, 12);

  await pool.query(
    `INSERT INTO staffs(username, birth_date, gender, branch, password) VALUES($1,$2,$3,$4,$5)`,
    [username, birth_date, gender, branch, pswHash]
  );

  const staff_id = await pool.query(
    `SELECT staff_id from staffs where username=$1`,
    [username]
  );

  await pool.query(`INSERT INTO permission_pms(staff_id) VALUES($1)`, [
    staff_id.rows[0].staff_id,
  ]);

  await pool.query(`INSERT INTO branch_pms(staff_id) VALUES($1)`, [
    staff_id.rows[0].staff_id,
  ]);

  await pool.query(`INSERT INTO transport_pms(staff_id) VALUES($1)`, [
    staff_id.rows[0].staff_id,
  ]);

  return { msg: "You're successfully registrated as a staff" };
};

const login = async ({ username, password }) => {
  const staffs = await getStaffs();
  const foundedStaff = staffs.find((s) => s.username === username);
  if (!foundedStaff) {
    return { token: "The username is invalid!" };
  }

  const checkPsw = await bcrypt.compare(password, foundedStaff.password);

  if (!checkPsw) {
    return { token: "The password is invalid" };
  }

  const staff_id = foundedStaff.staff_id;

  const token = sign({ staff_id });

  await pool.query(`INSERT INTO jwt(staff_id, token) VALUES($1,$2)`, [
    staff_id,
    token,
  ]);

  return { msg: "You're successfully logged in!", token };
};

module.exports = {
  getStaffs,
  registration,
  login,
};
