import { Admin } from '../../models/index.js';
import { signToken, AuthenticationError } from '../../utils/auth.js';

const adminResolvers = {
  Query: {
    admin: async (_: any, { username }: { username: string }) => {
      try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
          throw new Error('Admin not found');
        }
        return admin;
      } catch (error) {
        console.error('Error fetching admin:', error);
        throw new Error('Error fetching admin');
      }
    },
  },
  Mutation: {
    loginAdmin: async (_: any, { username, password }: { username: string, password: string }) => {
      try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
          throw new AuthenticationError('Invalid credentials');
        }
        const isMatch = await admin.isCorrectPassword(password);
        if (!isMatch) {
          throw new AuthenticationError('Invalid credentials');
        }
        const token = signToken(admin.username, admin.email, admin._id);
        return { token, admin };
      } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Error logging in');
      }
    },
  },
};

export default adminResolvers;