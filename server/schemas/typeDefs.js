const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        message: String
    }

    type Mutation {
        addMessage(name: String!, email: String!, message: String!): User
    }
`;

module.exports = typeDefs;