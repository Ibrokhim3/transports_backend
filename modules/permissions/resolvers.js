const { createPermissionPms } = require("./model");

module.exports = {
  Mutation: {
    permission: async (_, args) => await createPermissionPms(args),
  },
};
