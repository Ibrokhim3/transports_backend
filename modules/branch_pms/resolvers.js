const {
  createBranchPmsOn,
  readBranchPmsOn,
  updateBranchPmsOn,
  deleteBranchPmsOn,
  createBranchPmsOff,
  readBranchPmsOff,
  updateBranchPmsOff,
  deleteBranchPmsOff,
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
    createBranchPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createBranchPmsOn(args, token);
    },
    readBranchPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await readBranchPmsOn(args, token);
    },
    updateBranchPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updateBranchPmsOn(args, token);
    },
    deleteBranchPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deleteBranchPmsOn(args, token);
    },
    createBranchPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createBranchPmsOff(args, token);
    },
    readBranchPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await readBranchPmsOff(args, token);
    },
    updateBranchPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updateBranchPmsOff(args, token);
    },
    deleteBranchPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deleteBranchPmsOff(args, token);
    },
  },
};
