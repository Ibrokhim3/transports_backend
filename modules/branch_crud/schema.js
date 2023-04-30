const { gql } = require("apollo-server-express");

module.exports = gql`
  type Branch {
    branch_id: ID
    branch_name: String
    branch_address: String
    created_date: String
  }

  type BranchMessage {
    msg: String!
  }

  extend type Query {
    getBranches: [Branch!]
  }

  extend type Mutation {
    getOneBranch(branch_id: ID!): Branch
    createBranch(branch_name: String!, branch_address: String!): Message
    updateBranch(
      branch_id: ID!
      branch_name: String
      branch_address: String
    ): BranchMessage
    deleteBranch(branch_id: ID!): Message
  }
`;
