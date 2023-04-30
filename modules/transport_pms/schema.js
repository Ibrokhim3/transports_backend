const { gql } = require("apollo-server-express");

module.exports = gql`
  type Transport {
    staff_id: ID!
  }

  type TransportMessage {
    msg: String!
  }

  extend type Mutation {
    createTransportPmsOn(staff_id: ID!): TransportMessage
    readTransportPmsOn(staff_id: ID!): TransportMessage
    updateTransportPmsOn(staff_id: ID!): TransportMessage
    deleteTransportPmsOn(staff_id: ID!): TransportMessage
    createTransportPmsOff(staff_id: ID!): TransportMessage
    readTransportPmsOff(staff_id: ID!): TransportMessage
    updateTransportPmsOff(staff_id: ID!): TransportMessage
    deleteTransportPmsOff(staff_id: ID!): TransportMessage
  }
`;
