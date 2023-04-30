const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const staffModule = require("./staffs");
const permissionModule = require("./permissions");
const branchPmsModule = require("./branch_pms");

module.exports = [staffModule, permissionModule, branchPmsModule];
