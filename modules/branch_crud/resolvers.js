const { createBranch, getBranches, updateBranch, deleteBranch, getOneBranch } = require("./model");
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
  Query: {
    getBranches: async (_, args, { token }) => await getBranches(token),
  },
  Mutation: {
    getOneBranch: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await getOneBranch(args, token);
    },
    createBranch: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createBranch(args, token);
    },
    updateBranch: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updateBranch(args, token);
    },
    deleteBranch: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deleteBranch(args, token);
    },
   
  
  },
};
