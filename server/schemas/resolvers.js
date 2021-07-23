const { User } = require("../models");

const resolvers = {
    Query: {
        // get all users
        users: async() => {
            return User.findAll();
        }
    },

    Mutation: {
        addMessage: async(parent, args) => {
            const message = await User.create(args);
            return message;
        }
    }
};

module.exports = resolvers;