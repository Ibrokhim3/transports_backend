const { getStaffs, registration } = require("./model");

module.exports = {
  Query: {
    staffs: async () => await getStaffs(),
  },
  Mutation: {
    registration: (_, args) => registration(args),
  },
};
