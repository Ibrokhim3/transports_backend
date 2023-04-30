const { gql } = require("apollo-server-express");

module.exports = gql`
  type Permission {
    staff_id: ID!
  }

  type Message {
    msg: String!
  }

  type Mutation {
    createPermissionPmsOn(staff_id: ID!): Message
    readPermissionPmsOn(staff_id: ID!): Message
    updatePermissionPmsOn(staff_id: ID!): Message
    deletePermissionPmsOn(staff_id: ID!): Message
    createPermissionPmsOff(staff_id: ID!): Message
    readPermissionPmsOff(staff_id: ID!): Message
    updatePermissionPmsOff(staff_id: ID!): Message
    deletePermissionPmsOff(staff_id: ID!): Message
  }
`;
