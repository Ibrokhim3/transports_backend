const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const staffModule = require("./staffs");
const permissionPmsModule = require("./permissions_pms");
const branchPmsModule = require("./branch_pms");
const transportPmsModule = require("./transport_pms");
const branchModule = require("./branch_crud");

module.exports = [
  staffModule,
  permissionPmsModule,
  branchPmsModule,
  transportPmsModule,
  branchModule,
];
