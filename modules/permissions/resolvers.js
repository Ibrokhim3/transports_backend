const {
  createPermissionPmsOn,
  readPermissionPmsOn,
  updatePermissionPmsOn,
  deletePermissionPmsOn,
  createPermissionPmsOff,
  readPermissionPmsOff,
  updatePermissionPmsOff,
  deletePermissionPmsOff,
} = require("./model");
const pool = require("../../db/db_config");

//ishlamadi !

// const jwtFunc = async (token) => {
//   const jwtInfo = await pool.query(`SELECT * FROM jwt`);
//   const { token: jwtToken } = jwtInfo.rows[0];
//   if (token !== jwtToken) {
//     return { msg: "Token doesn't exist or you're not authorized" };
//   }
// };

module.exports = {
  Mutation: {
    createPermissionPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createPermissionPmsOn(args, token);
    },
    readPermissionPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await readPermissionPmsOn(args, token);
    },
    updatePermissionPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updatePermissionPmsOn(args, token);
    },
    deletePermissionPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deletePermissionPmsOn(args, token);
    },
    createPermissionPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createPermissionPmsOff(args, token);
    },
    readPermissionPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await readPermissionPmsOff(args, token);
    },
    updatePermissionPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updatePermissionPmsOff(args, token);
    },
    deletePermissionPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deletePermissionPmsOff(args, token);
    },
  },
};
