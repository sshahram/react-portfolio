const express = require('express');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

// import connect file
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// create new Apollo Server and pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());