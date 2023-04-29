const { gql } = require("apollo-server-express");

module.exports = gql`
  type Staff {
    staff_id: ID!
    username: String!
    birth_date: String!
    gender: String!
    branch: String!
  }

  type Message {
    msg: String!
  }

  type Token {
    msg: String!
    token: String
  }

  type Query {
    staffs: [Staff!]
  }

  type Mutation {
    getStaff(staffId: String!): Staff
    registration(
      username: String!
      branch: String!
      password: String!
      repeat_password: String!
      birth_date: String!
      gender: String!
    ): Message
    login(username: String!, password: String!): Token
  }
`;
