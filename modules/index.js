const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const staffModule = require("./staffs");
const permissionModule = require("./permissions");

module.exports = [staffModule, permissionModule];
