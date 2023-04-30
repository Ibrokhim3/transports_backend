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

const getBranches = async (token) => {
  const staffInfo = verify(token);

  const permission = await pool.query(
    `SELECT read_p FROM branch_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  // Shu joy ishlamadi union type qilish kerak

  // if (permission.rows[0].read_p === false) {
  //   return { msge: "You have no right to get branches" };
  // }
  const branches = await pool.query(`SELECT * FROM branches`);

  return branches.rows;
};

const getOneBranch = async ({ branch_id }, token) => {
  const staffInfo = verify(token);

  const permission = await pool.query(
    `SELECT read_p FROM branch_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].read_p === false) {
    return { msg: "You have no right to get branch data" };
  }

  const foundedBranches = await pool.query(
    `SELECT * FROM branches where branch_id=$1`,
    [branch_id]
  );

  if (!foundedBranches.rows[0]) {
    return { msg: "Branch not found" };
  }

  // await pool.query(
  //   `SELECT * branches where branch_id=$1`,
  //   [branch_id]
  // );
  return foundedBranches.rows[0];
};

const createBranch = async ({ branch_name, branch_address }, token) => {
  const staffInfo = verify(token);

  const permission = await pool.query(
    `SELECT create_p FROM branch_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].create_p === false) {
    return { msg: "You have no right to add branch" };
  }

  await pool.query(
    `INSERT INTO branches(branch_name, branch_address) VALUES($1,$2)`,
    [branch_name, branch_address]
  );

  return { msge: "Branch successfully added!" };
};

const updateBranch = async (
  { branch_id, branch_name, branch_address },
  token
) => {
  const staffInfo = verify(token);

  const permission = await pool.query(
    `SELECT update_p FROM branch_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].update_p === false) {
    return { msg: "You have no right to edit branch data" };
  }

  const foundedBranches = await pool.query(
    `SELECT * FROM branches where branch_id=$1`,
    [branch_id]
  );

  if (!foundedBranches.rows[0]) {
    return { msg: "Branch not found" };
  }

  branch_name = branch_name ? branch_name : foundedBranches.rows[0].branch_name;
  branch_address = branch_address
    ? branch_address
    : foundedBranches.rows[0].branch_address;

  await pool.query(
    `UPDATE branches SET branch_name=$1, branch_address=$2 where branch_id=$3`,
    [branch_name, branch_address, branch_id]
  );
  return { msg: "Branch permission successfully updated!" };
};

const deleteBranch = async ({ branch_id }, token) => {
  const staffInfo = verify(token);

  const permission = await pool.query(
    `SELECT delete_p FROM branch_pms where staff_id=$1`,
    [staffInfo.staff_id]
  );

  if (permission.rows[0].delete_p === false) {
    return { msg: "You have no right to delete branch data" };
  }

  const foundedBranches = await pool.query(
    `SELECT * FROM branches where branch_id=$1`,
    [branch_id]
  );

  if (!foundedBranches.rows[0]) {
    return { msg: "Branch not found" };
  }

  await pool.query(`DELETE from branches where branch_id=$1`, [branch_id]);
  return { msg: "Branch permission successfully delete!" };
};

module.exports = {
  getBranches,
  getOneBranch,
  createBranch,
  updateBranch,
  deleteBranch,
};
