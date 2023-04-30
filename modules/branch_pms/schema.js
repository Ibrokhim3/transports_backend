const { gql } = require("apollo-server-express");

module.exports = gql`
  type Branch_pms {
    staff_id: ID!
  }

  type BranchPmsMessage {
    msg: String!
  }

  extend type Mutation {
    createBranchPmsOn(staff_id: ID!): BranchPmsMessage
    readBranchPmsOn(staff_id: ID!): BranchPmsMessage
    updateBranchPmsOn(staff_id: ID!): BranchPmsMessage
    deleteBranchPmsOn(staff_id: ID!): BranchPmsMessage
    createBranchPmsOff(staff_id: ID!): BranchPmsMessage
    readBranchPmsOff(staff_id: ID!): BranchPmsMessage
    updateBranchPmsOff(staff_id: ID!): BranchPmsMessage
    deleteBranchPmsOff(staff_id: ID!): BranchPmsMessage
  }
`;
