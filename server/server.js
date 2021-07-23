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
