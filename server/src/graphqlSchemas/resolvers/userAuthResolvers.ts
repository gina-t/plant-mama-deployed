import { User } from '../../models/index.js';
import { signToken } from '../../utils/auth.js';
import bcrypt from 'bcryptjs';

const userResolvers = {
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
    user: async (_: any, { id }: { id: string }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user');
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: any) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const user = new User({ ...input, password: hashedPassword });
        await user.save();
        return user;
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
      }
    },
    updateUser: async (_: any, { id, ...updateData }: any) => {
      try {
        if (updateData.password) {
          updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        return user;
      } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Error updating user');
      }
    },
  },
};

export default userResolvers;
