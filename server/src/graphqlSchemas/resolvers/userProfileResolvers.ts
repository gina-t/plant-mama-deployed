import { User } from '../../models/index.js';

const userProfileResolvers = {
  Query: {
    getUserProfile: async (_: any, { id }: any) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error('Error fetching user profile:', error);
        throw new Error('Error fetching user profile');
      }
    },
  },
  Mutation: {
    updateUserProfile: async (_: any, { id, input }: any) => {
      try {
        const user = await User.findByIdAndUpdate(id, input, { new: true });
        return user;
      } catch (error) {
        console.error('Error updating user profile:', error);
        throw new Error('Error updating user profile');
      }
    },
  },
};

export default userProfileResolvers;