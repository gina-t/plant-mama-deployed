// Resolvers are functions that implement the logic for fetching and manipulating the data defined in the type definitions. Each field in the schema has a corresponding resolver function that is responsible for returning the data for that field.

import { User } from '../../models/index.js';
import { signToken, AuthenticationError } from '../../utils/auth.js';

interface LoginUserArgs {
  email: string;
  password: string;
}

interface CreateUserArgs {
  input: {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
  };
}

interface UserArgs {
  username: string;
}

const userAuthResolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users');
      }
    },
    user: async (_parent: any, { username }: UserArgs) => {
      try {
        const user = await User.findOne({ username });
        return user;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user');
      }
    },
  },
  Mutation: {
    createUser: async (_parent: any, { input }: CreateUserArgs) => {
      try {
        const user = await User.create({ ...input });
        const token = signToken(user.username, user.email, user._id);
        return { token, user };
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
      }
    },
    loginUser: async (_parent: any, { email, password }: LoginUserArgs) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('Could not authenticate user');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Could not authenticate user');
        }
        const token = signToken(user.username, user.email, user._id);
        return { token, user };
      } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Error logging in');
      }
    },
  },
};

export default userAuthResolvers;
