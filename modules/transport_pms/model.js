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
    `SELECT create_p FROM transport_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].create_p === false) {
    return { msg: "You can't add permission!" };
  }
};

////

const readTransportPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE transport_pms SET read_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Permission successfully added!" };
};

const createTransportPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE transport_pms SET create_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Permission successfully added!" };
};

const updateTransportPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE transport_pms SET update_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Permission successfully added!" };
};

const deleteTransportPmsOn = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE transport_pms SET delete_p=true where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Permission successfully added!" };
};

//Off

const readTransportPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(`UPDATE transport_pms SET read_p=false where staff_id=$1`, [
    staff_id,
  ]);
  return { msg: "Permission successfully added!" };
};

const createTransportPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(
    `UPDATE transport_pms SET create_p=false where staff_id=$1`,
    [staff_id]
  );
  return { msg: "Permission successfully added!" };
};

const updateTransportPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(
    `UPDATE transport_pms SET update_p=false where staff_id=$1`,
    [staff_id]
  );
  return { msg: "Permission successfully added!" };
};

const deleteTransportPmsOff = async ({ staff_id }, token) => {
  permissionFunc(staff_id, token);
  await pool.query(
    `UPDATE transport_pms SET delete_p=false where staff_id=$1`,
    [staff_id]
  );
  return { msg: "Permission successfully added!" };
};

module.exports = {
  createTransportPmsOn,
  readTransportPmsOn,
  updateTransportPmsOn,
  deleteTransportPmsOn,
  createTransportPmsOff,
  readTransportPmsOff,
  updateTransportPmsOff,
  deleteTransportPmsOff,
};
