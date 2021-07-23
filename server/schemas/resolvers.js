const { User } = require("../models");

const resolvers = {
    Query: {
        // get all users
        users: async(parent, args) => {
            return User.find();
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