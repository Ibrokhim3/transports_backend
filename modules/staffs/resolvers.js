const { getStaffs, registration, login } = require("./model");

module.exports = {
  Query: {
    staffs: async () => await getStaffs(),
  },
  Mutation: {
    registration: async (_, args) => await registration(args),
    login: async (_, args)=> await login(args)
  },
};
