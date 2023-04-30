const {
  createTransportPmsOn,
  readTransportPmsOn,
  updateTransportPmsOn,
  deleteTransportPmsOn,
  createTransportPmsOff,
  readTransportPmsOff,
  updateTransportPmsOff,
  deleteTransportPmsOff,
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
    createTransportPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createTransportPmsOn(args, token);
    },
    readTransportPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await readTransportPmsOn(args, token);
    },
    updateTransportPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updateTransportPmsOn(args, token);
    },
    deleteTransportPmsOn: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deleteTransportPmsOn(args, token);
    },
    createTransportPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await createTransportPmsOff(args, token);
    },
    readTransportPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await readTransportPmsOff(args, token);
    },
    updateTransportPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await updateTransportPmsOff(args, token);
    },
    deleteTransportPmsOff: async (_, args, { token }) => {
      const jwtInfo = await pool.query(`SELECT * FROM jwt`);
      const { token: jwtToken } = jwtInfo.rows[0];
      if (!token || token !== jwtToken) {
        return { msg: "Token doesn't exist or you're not authorized" };
      }
      await deleteTransportPmsOff(args, token);
    },
  },
};
