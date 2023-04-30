const { verify } = require("../../utils/jwt");
const pool = require("../../db/db_config");

const createPermissionPms = async ({ staff_id }, token) => {
  const staffId = await pool.query(
    `SELECT staff_id FROM staffs where staff_id=$1`,
    [staff_id]
  );

  if (!staffId.rows[0]) {
    return { msg: "Staff doesn't exist" };
  }

  const staffInfo = verify(token);

  console.log(staffInfo.staff_id);

  const permission = await pool.query(
    `SELECT create_p FROM permission_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].create_p === false) {
    return { msg: "You can't add permission!" };
  }
  await pool.query(
    `UPDATE permission_pms SET (create_p=true) where staff_id=$1`,
    [staff_id]
  );

  return { msg: "Permission successfully added!" };
};

module.exports = {
  createPermissionPms,
};
