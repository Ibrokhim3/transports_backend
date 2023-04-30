const { gql } = require("apollo-server-express");

module.exports = gql`
  type Staff {
    staff_id: ID!
    username: String!
    birth_date: String!
    gender: String!
    branch: String!
  }

  type StaffMessage {
    msg: String!
  }

  type Token {
    msg: String!
    token: String
  }

  type Query {
    staffs: [Staff!]
  }

  extend type Mutation {
    getStaff(staffId: String!): Staff
    registration(
      username: String!
      branch: String!
      password: String!
      repeat_password: String!
      birth_date: String!
      gender: String!
    ): StaffMessage
    login(username: String!, password: String!): Token
  }
`;
