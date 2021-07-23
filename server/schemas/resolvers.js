const { User } = require("../models");

const resolvers = {
    Query: {
        // get all users
        users: async() => {
            return User.findAll();
        }
    }
};

module.exports = resolvers;