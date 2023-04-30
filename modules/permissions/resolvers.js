const { login } = require("../staffs/model");
const { createPermissionPms } = require("./model");

module.exports = {
  Mutation: {
    permission: async (_, args, { token }) => {
      await createPermissionPms(args, token);
    },
  },
};
