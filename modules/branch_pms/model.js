const { verify } = require("../../utils/jwt");
const pool = require("../../db/db_config");

// Umumiy funksiya

const permissionFunc = async (staff_id, token) => {
  const staffId = await pool.query(
    `SELECT staff_id FROM staffs where staff_id=$1`,
    [staff_id]
  );

  if (!staffId.rows[0]) {
    return { msg: "Staff doesn't exist" };
  }

  const staffInfo = verify(token);

  const permission = await pool.query(
    `SELECT create_p FROM permission_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].create_p === false) {
    return { msg: "You can't add permission!" };
  }
};

////

const readBranchPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET read_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

const createBranchPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET create_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

const updateBranchPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET update_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

const deleteBranchPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET delete_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

//Off

const readBranchPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET read_p=false where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

const createBranchPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET create_p=false where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

const updateBranchPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET update_p=false where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

const deleteBranchPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE branch_pms SET delete_p=false where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Branch permission successfully added!" };
};

module.exports = {
  createBranchPmsOn,
  readBranchPmsOn,
  updateBranchPmsOn,
  deleteBranchPmsOn,
  createBranchPmsOff,
  readBranchPmsOff,
  updateBranchPmsOff,
  deleteBranchPmsOff,
};
