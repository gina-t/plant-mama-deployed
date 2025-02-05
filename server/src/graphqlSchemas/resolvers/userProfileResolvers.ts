import { User } from '../../models/index.js';

const userProfileResolvers = {
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