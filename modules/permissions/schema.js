const { gql } = require("apollo-server-express");

module.exports = gql`
  type Permission {
    staff_id: ID!
  }

  type Message {
    msg: String!
  }

  type Mutation {
    permission(staff_id: ID!): Message
  }
`;
